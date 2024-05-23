"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllersLipanampesa = require("../controllers/controllers.lipanampesa.js");
var _middlewaresGenerateAccessToken = require("../middlewares/middlewares.generateAccessToken.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.route('/stkPush').post(_middlewaresGenerateAccessToken.accessToken, _controllersLipanampesa.initiateSTKPush);
router.route('/stkPushCallback/:Order_ID').post(_controllersLipanampesa.stkPushCallback);
router.route('/confirmPayment/:CheckoutRequestID').post(_middlewaresGenerateAccessToken.accessToken, _controllersLipanampesa.confirmPayment);
var _default = exports["default"] = router;