import express from "express";
import fs from "fs";
const morgan = require("morgan");
import cors from "cors";
import mongoose from "mongoose";
// import router from "./routes/auth";
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error: ", err));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
