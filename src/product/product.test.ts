import { serverSetup } from "../utils/serverTest";
import request from "supertest"
import { router_wrap } from "./product.router";
import { addProductToDb } from "./product.dao";
import { connectDB, disconnectDB } from "../utils/connectdb";
import model from "../product/product.schema"
import {_} from "lodash"
import {config} from "dotenv"

config()
const app=serverSetup(router_wrap)

beforeAll(async()=>{
    try{
        await connectDB(process.env.MONGO_URI_DEV)
    const dummyProducts=[
        {name:"product_1",price:10},
        {name:"product_2",price:20},
        {name:"product_3",price:30}
    ]
    for(const product of dummyProducts ){
        await addProductToDb(product)
    }
    }catch(e){
        console.log(e)
    }
})

describe("Product API integration testing",()=>{
    //GETALL
    it("GET // It should return all items from the product collection",async()=>{
        return await request(app).get("/products")
        .then(res=>{
            expect(res.statusCode).toBe(200)
            expect(res.body).toBeDefined()
            expect(_.isArray(res.body)).toBeTruthy()
            expect(res.body.length).toBe(3)
            expect(res.body[0].name).toEqual("product_1")
        
        })
    })
})

afterAll(async()=>{
    await model.deleteMany()
    
    await disconnectDB()
})