const { response } = require('express')
const express=require('express')
const app = express()
const port = 3000
app.get("/",(request,response) =>{
    response.sendFile(__dirname+"/index/index.html")
})
app.listen(port,()=>{
    console.log("Start to listen port")
})
app.use(express.static("static"))