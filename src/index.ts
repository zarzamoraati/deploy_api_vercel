import express from "express"
import { router_wrap } from "./product/product.router"
import { connectDB } from "./utils/connectdb"
import cors from "cors"
require("dotenv").config()

const app=express()
const PORT= process.env.PORT || 3000

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json())


app.get("/",(req,res)=>{  
    return res.json({msg:"Hello world"})
})

router_wrap(app)

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI_DEV)
        app.listen(PORT,()=>{console.log("Server Runningin PORT: ",PORT)})
    }catch(e){
        console.log(e)
    }
}
start()

export default app;