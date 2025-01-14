
const express = require ("express")
const router = require("./router/userRouter")
const studentrouter = require ("./router/studentRouter")
require("./config/dbConfig")
const port = process.env.port || 4098
const app = express()

const cors = require(`cors`)


app.use(express.json())
app.use(cors({origin:"*"}))
app.use("/api/v1/", router)
app.use("/api/v1/", studentrouter)



app.listen(port,()=>{
    console.log("server is listening to port", port);
})

app.get("/", (req,res)=>{
    res.status(200).json({message:"Homepage"})
})   