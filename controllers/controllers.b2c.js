import request from "request";
import "dotenv/config";

// @desc initiate b2c
// @method POST
// @route /b2c
// @access public
export const initiateB2C = async (req, res) => {
  try {
    const url = "https://api.safaricom.co.ke/mpesa/b2c/v3/paymentrequest";
    const auth = "Bearer " + req.safaricom_access_token;

    const { amount, phone } = req.body;

    function makeid(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    let unique = makeid(12);

    request(
      {
        url: url,
        method: "POST",
        headers: {
          Authorization: auth,
        },
        json: {
          OriginatorConversationID: unique,
          InitiatorName: "ericm",
          SecurityCredential:
            "YSVLphzsySe9k2n4T5MHin4RP36MWiSeYA4/4E6UxxgXPb5rS+vF+J/9B3ayhobwmE7jym2ePe4ABtnxpamTQL1HlDL0+4F2TlM2Bw+1cLoP35YeSoxakFdmrGs/S2mNwuP3tMZJCSVnseVdhT69wHQv90XW4Z6oVAui13I4WgGOTMgbjaXOpRb5+wGaObBoiMmsv8Hy9DZYuRllbFwwvlGz64AP2WlrK5+5Cj54Bub8wHHIiWN45UmeqOS1nSrlIw2tsJkxFgSAV60sq8uValNCQKnIRLv+vtQyptl0cExnrlzTM6hXDBEhV5ltAM9syKGzAnvGv1Xf//azMr+VYQ==",
          CommandID: "BusinessPayment",
          Amount: amount,
          PartyA: "3033729",
          PartyB: phone,
          Remarks: "PAYMENT",
          QueueTimeOutURL: "https://solva-mech.vercel.app/api/b2c-timeout",
          ResultURL: "https://solva-mech.vercel.app/api/b2c-result",
          Occassion: "SOLVA BUSINESS GROUP",
        },
      },
      function (e, response, body) {
        if (e) {
          console.error(e);
          res.status(503).send({
            message: "Error with the stk push",
            error: e,
          });
        } else {
          res.status(200).json(body);
        }
      }
    );
  } catch (e) {
    console.error("Error while trying to create LipaNaMpesa details", e);
    res.status(503).send({
      message:
        "Something went wrong while trying to create LipaNaMpesa details. Contact admin",
      error: e,
    });
  }
};
