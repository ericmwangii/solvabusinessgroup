import request from "request";
import "dotenv/config";
export var accessToken = function accessToken(req, res, next) {
  try {
    var url = "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    var auth = new Buffer.from("".concat(process.env.SAFARICOM_CONSUMER_KEY, ":").concat(process.env.SAFARICOM_CONSUMER_SECRET)).toString("base64");
    request({
      url: url,
      headers: {
        Authorization: "Basic " + auth
      }
    }, function (error, response, body) {
      if (error) {
        res.status(401).send({
          message: "Something went wrong when trying to process your payment",
          error: error.message
        });
      } else {
        req.safaricom_access_token = JSON.parse(body).access_token;
        next();
      }
    });
  } catch (error) {
    console.error("Access token error ", error);
    res.status(401).send({
      message: "Something went wrong when trying to process your payment",
      error: error.message
    });
  }
};
export var b2cToken = function b2cToken(req, res, next) {
  try {
    var url = "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    var auth = new Buffer.from("".concat(process.env.CONSUMER_KEY, ":").concat(process.env.CONSUMER_SECRET)).toString("base64");
    request({
      url: url,
      headers: {
        Authorization: "Basic " + auth
      }
    }, function (error, response, body) {
      if (error) {
        res.status(401).send({
          message: "Something went wrong when trying to process your payment",
          error: error.message
        });
      } else {
        req.safaricom_access_token = JSON.parse(body).access_token;
        next();
      }
    });
  } catch (error) {
    console.error("Access token error ", error);
    res.status(401).send({
      message: "Something went wrong when trying to process your payment",
      error: error.message
    });
  }
};