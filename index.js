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
app.get("/catalogue",(request,response) =>{
    response.sendFile(__dirname+"/index/catalogue.html")
})
let product1={
    count:5000,
    cost:1000,
    category: "balls"
}
let product2 ={
    count : 3000,
    cost:2500,
    category:"gloves"
}
let product3 ={
    count: 1000,
    cost: 10000,
    category: "boots"
}
let products =[product1,product2,product3]
let category = "balls"
for(let i =0; i<products.length;i++){
    if(products[i].category== category){
        console.log(products[i])
    }
}

let array = ["title:Гарри Поттер и философский камень", "releasedYear:2001", "director:Chris Columbus", "mainActor:Daniel Jacob Radcliffe"]
function createObject(array){
    let obj={}
    let property=""
    let value=""
    for(let i =0;i<array.length;i++){
        for(let j = 0;j<array[i].length;j++){
            if(array[i][j]==":") {
            property = array[i].slice(0,j)
            value =  array[i].slice(j+1,array[i].length)
        }
    }
        obj[property]=value
        
    }
    return obj
}
let n =createObject(array)
console.log(n)

