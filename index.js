import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`da ket noi den cong ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log("loiroi"));
