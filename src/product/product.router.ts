import express,{Express} from "express";
import { getAllProducts } from "./product.controller";
const productRouter=express.Router()

productRouter.route("/products").get(getAllProducts).post()

export const router_wrap=(app:Express)=>app.use("/",productRouter)
