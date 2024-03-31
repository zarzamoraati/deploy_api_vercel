import {Request,Response} from "express"

const getAllProducts=async(req:Request,res:Response)=>{ 
    return res.status(200).json({msg:"return product"})    
}


export {getAllProducts}