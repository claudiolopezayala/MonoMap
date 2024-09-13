import express from "express"
import { envs } from "./utils/dontenv";
import AppRouter from "./router/app-router";

const app = express();

app.use("/", AppRouter.routes)

app.listen(envs.PORT, ()=>{
  console.log(`Server is running on port ${envs.PORT}`)
})