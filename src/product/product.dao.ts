import { Product } from "./product.interface"
import model from "./product.schema"

const getAllItemsFromDb=async()=>{
    const response=await model.find({})
    return response
}

const addProductToDb=async(product:Product)=>{
   const response=await model.create(product)
   return response
}

export {getAllItemsFromDb,addProductToDb}
