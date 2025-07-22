// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";

const api = express();

api.use(cors());

const router = Router();
router.get("/currency/USDTIRT", async (req, res) => {
  try {
    const response = await fetch("https://apiv2.nobitex.ir/v3/orderbook/USDTIRT");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

api.use("/api/", router);

export const handler = serverless(api);
