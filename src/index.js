import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    // app.on("error", (error)=>{
    //     console.log("ERROR : ", error)
    // })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`\n Server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB Connection failed !!! ", err )
})


















/*
import express from "express"
import mongoose from "mongoose"
const app = express()

;( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR: ",error)
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening at ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR ", error)
    }
})()
*/