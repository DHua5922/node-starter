// Source: https://blog.logrocket.com/typescript-with-node-js-and-express/

import express from "express";
import homeRoute from "./routes/home";
import userRoute from "./routes/user";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToMongoDB } from "./config/database";
import { useEnvironmentVariables } from "./utilities/env";

const main = async () => {
  useEnvironmentVariables();

  connectToMongoDB(process.env.MONGODB_URI as string);

  const app = express();

  app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json({ extended: true, limit: "50mb" } as any));

  app.use("/", homeRoute);
  app.use("/user", userRoute);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

main();
