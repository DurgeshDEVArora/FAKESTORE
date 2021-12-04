import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/Database.js";
import router from "./routes/routes.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();
app.use("/api", router);
app.get('/',async(req,res)=>{
res.status(200).json("Welcome to fake-store")
})

const Port = process.env.PORT || 5000;
app.listen(Port, console.log("Server Started"));
