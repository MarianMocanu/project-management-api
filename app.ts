"use strict";
import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = 3000;
const prisma = new PrismaClient();

app.get("/", async (req: Request, res: Response) => {
  const allUsers = await prisma.person.findMany();
  console.log(allUsers);
  res.send(allUsers);
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
