import express from "express";
import cors from "cors";
import "dotenv/config";
import lipaNaMpesaRoutes from "./routes/routes.lipanampesa.js";

// initialise exxpress
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", lipaNaMpesaRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
