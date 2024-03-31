import express from "express";

export const serverSetup=(wrapper)=>{
    const app=express()
    app.use(express.json())
    wrapper(app)
    return app
}