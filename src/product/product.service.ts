import { getAllItemsFromDb,addProductToDb } from "./product.dao"
import { Product } from "./product.interface"

const getAllProductsService=async()=>{
    try{
        return await getAllItemsFromDb()
    }catch(e){
        throw e
    }
}

const addProductService=async(product:Product)=>{
    try{
        if(product.name=="" || product.price==0){
            throw new Error("Field name/price shouldn't be empty or 0")
        }
        return await addProductToDb(product)
    }catch(e){
        throw e
    }
}
export {getAllProductsService,addProductService}
