const express = require("express")
const sus = express()
let xd = require("./col")
sus.get("/",(req,res) => {
    res.send("api work!")
})
sus.get("/api",(req,res) => {
    res.json(xd)
})
sus.listen(3000)