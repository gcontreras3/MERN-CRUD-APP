import express from "express"
import mongoose, { Mongoose } from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"


const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database is connected successfully")
    app.listen(PORT, ()=>{
        console.log(`SErver is running on port ${PORT}`);
    })
})
.catch((error) => console.log(error))