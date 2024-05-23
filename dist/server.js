import express from "express";
import cors from "cors";
import "dotenv/config";
import lipaNaMpesaRoutes from "./routes/routes.lipanampesa.js";

// initialise exxpress
var app = express();
app.use(express.json());
app.use(cors());
app.use("/api", lipaNaMpesaRoutes);
var port = process.env.PORT;
app.listen(port, function () {
  console.log("App listening on port ".concat(port));
});