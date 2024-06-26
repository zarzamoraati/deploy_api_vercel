import express,{Express} from "express";
import { addProduct, getAllProducts } from "./product.controller";
const productRouter=express.Router()

productRouter.route("/products").get(getAllProducts).post(addProduct)

export const router_wrap=(app:Express)=>app.use("/",productRouter)
