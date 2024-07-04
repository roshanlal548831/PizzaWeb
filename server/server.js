const express = require("express");
const app = express();
const morgan = require("morgan")
// middleware

app.use(express.json());
app.use(morgan("tiny"));

// router 
const router = require("./routes/pizzaRoute")
app.use("/api/pizza",router)


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8000,()=>{
    console.log("server runing 8000")
})
