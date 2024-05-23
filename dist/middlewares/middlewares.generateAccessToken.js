"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessToken = void 0;
var _request = _interopRequireDefault(require("request"));
require("dotenv/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var accessToken = exports.accessToken = function accessToken(req, res, next) {
  try {
    var url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    var auth = new Buffer.from("".concat(process.env.SAFARICOM_CONSUMER_KEY, ":").concat(process.env.SAFARICOM_CONSUMER_SECRET)).toString('base64');
    (0, _request["default"])({
      url: url,
      headers: {
        "Authorization": "Basic " + auth
      }
    }, function (error, response, body) {
      if (error) {
        res.status(401).send({
          "message": 'Something went wrong when trying to process your payment',
          "error": error.message
        });
      } else {
        req.safaricom_access_token = JSON.parse(body).access_token;
        next();
      }
    });
  } catch (error) {
    console.error("Access token error ", error);
    res.status(401).send({
      "message": 'Something went wrong when trying to process your payment',
      "error": error.message
    });
  }
};