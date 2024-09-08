import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

import userRouter from "./routes/user.routes.js"
import fertilizer from "./routes/fertilizer.route.js"

app.use(
  cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16Kb" }));
//extended used to nested object;
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public")); //public assits to store file ,image

app.use(cookieParser());

//routes 

app.use("/user" , userRouter);
app.use("/fertilizer" , fertilizer); 

export { app };