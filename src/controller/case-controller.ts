import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"

export class CaseController {
  public getAll = async(req: Request, res: Response)=>{
    try{
      res.json("test").status(StatusCodes.OK)
    }catch(error){
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

}