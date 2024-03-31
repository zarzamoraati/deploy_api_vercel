import {Request,Response} from "express"
import { addProductService, getAllProductsService } from "./product.service"

const getAllProducts=async(req:Request,res:Response)=>{ 
   try{
    const response=await getAllProductsService()
    return res.status(200).json(response)
   }catch(e){
    return res.status(500).json(e)
   }  
}

const addProduct=async(req:Request,res:Response)=>{
    try{
        // validate request
        const body=req.body
        if(!body){
            throw new Error("Bad Request,field 'body' is not defined")
        }
        const response=await addProductService(body)
        
        if ("_id" in response){
            return res.status(201).json(response)
        }
    }catch(e){
        return res.status(500).json(e)
    }
}

export {getAllProducts,addProduct}