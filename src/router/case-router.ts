import { Router } from "express";
import { CaseController } from "../controller/case-controller";

export class CaseRouter{
  static get routes(): Router{
    const router = Router();
    const caseController = new CaseController()
    router.post("/", caseController.createCase)
    router.get("/", caseController.getAll)
    return router
  }
}