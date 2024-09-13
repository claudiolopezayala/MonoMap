import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { CaseModel }from "../model/case-model"

export class CaseController {
  public getAll = async(req: Request, res: Response)=>{
    try{
      res.json("test").status(StatusCodes.OK)
    }catch(error){
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  public createCase = async(req: Request, res: Response)=>{
    try{
      const monoCase = req.body
      const insertionResponse = await CaseModel.create({
        age: monoCase.age,
        creationDate: new Date().toISOString(),
        genre: monoCase.genre,
        isSent: false,
        lat: monoCase.lat,
        lng: monoCase.lng,
      })
      res.json(insertionResponse).status(StatusCodes.OK)
    }catch(error){
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

}