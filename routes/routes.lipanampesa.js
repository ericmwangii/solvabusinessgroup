import express from "express";
const router = express.Router();
import {
  initiateSTKPush,
  stkPushCallback,
  confirmPayment,
  b2CResult,
  b2cTimeout,
} from "../controllers/controllers.lipanampesa.js";
import {
  accessToken,
  b2cToken,
} from "../middlewares/middlewares.generateAccessToken.js";
import { initiateB2C } from "../controllers/controllers.b2c.js";

// Default route handler
router.get("/", (req, res) => {
  res.send("Solva Business Group");
});

router.route("/stkPush").post(accessToken, initiateSTKPush);

router.route("/b2c").post(b2cToken, initiateB2C);

router.route("/b2c-result").post(b2CResult);

router.route("/b2c-timeout").post(b2cTimeout);

router.route("/stkPushCallback/:Order_ID").post(stkPushCallback);
router
  .route("/confirmPayment/:CheckoutRequestID")
  .post(accessToken, confirmPayment);

export default router;
