const { response } = require('express')
const express = require('express')
const fs = require("fs");
const app = express()
app.set("view engine","ejs")
const port = 3000
app.get("/", (request, response) => {
    context={
        message:"This is new message"
    }
    response.render("index", context)
    
    // response.sendFile(__dirname + "/index/index.html")
})
app.listen(port, () => {
    console.log("Start to listen port")
})
app.use(express.static("static"))
app.get("/catalogue", (request, response) => {
    response.sendFile(__dirname + "/index/catalogue.html")
})

// let product1={
//     count:5000,
//     cost:1000,
//     category: "balls"
// }
// let product2 ={
//     count : 3000,
//     cost:2500,
//     category:"gloves"
// }
// let product3 ={
//     count: 1000,
//     cost: 10000,
//     category: "boots"
// }
// let products =[product1,product2,product3]
// let category = "balls"
// for(let i =0; i<products.length;i++){
//     if(products[i].category== category){
//         console.log(products[i])
//     }
// }

// let array = ["title:Гарри Поттер и философский камень", "releasedYear:2001", "director:Chris Columbus", "mainActor:Daniel Jacob Radcliffe"]
// function createObject(array){
//     let obj={}
//     let property=""
//     let value=""
//     for(let i =0;i<array.length;i++){
//         for(let j = 0;j<array[i].length;j++){
//             if(array[i][j]==":") {
//                 property = array[i].slice(0,j)
//                 value =  array[i].slice(j+1,array[i].length)
//             }
//         }
//         obj[property]=value

//     }
//     return obj
// }
// let n =createObject(array)
// console.log(n)

// function CreateObj() {
//    let urlParams = urlParams.slice(1,urlParams.length)
//     let massiveUrlParams = []
//     massiveUrlParams = urlParams.split(`&`)

//     let obj = {}
//     let property = ""
//     let value = []
//     for (let i = 0; i < massiveUrlParams.length; i++) {
//         for (let j = 0; j < massiveUrlParams[i].length; j++) {
//             if (massiveUrlParams[i][j] == "=") {
//                 console.log(massiveUrlParams)
//                 property = massiveUrlParams[i].slice(0, j)
//                obj[property]= massiveUrlParams[i].slice(j + 1, massiveUrlParams[i].length).split(",")
//                 break
//             }

//         }

//     }
//     return obj
// }

// let n = CreateObj()
// console.log(n)
function saveData(filename, data) {
    console.log(data)
    fs.writeFile(filename, data, (error) => {
        if (error) throw error;
        console.log("Асинхронная запись файла завершена. ");


    });
}
function openFile(filename) {

    fs.readFile(filename, "utf8", (error, data) => {

        if (error) {
            console.log("Ошибка чтения")
            console.log(error)
            return
        }
        let sum = 0
        let n = data.split(" ")
        let j = 0
        for (let i = 0; i < n.length; i++) {
            sum = sum + Number(n[i])
            j = j + 1
        }
        m = sum / j
        saveData("output.txt", m.toString())
    })

}
let result = openFile("input.txt")

let adidas = {
    name: "Бутсы Adidas Predator",
    cost: 39999,
    size: [42, 43, 44, 45],
    description: "здесь будет описание"
}
let nike = {
    name: "Nike Mercurial",
    cost: 34999,
    size: [42, 43, 44, 45],
    description: "здесь будет описание"
}
let puma = {
    name: "Puma Future",
    cost: 9999,
    size: [7, 8, 9, 10],
    description: "здесь будет описание"
}
products = [adidas, nike, puma]

function saveProducts(filename, products) {
    let dataToSave = JSON.stringify(products)

    saveData(filename, dataToSave)
}
// saveProducts("products.json",products)
function loadProducts(filename) {
    let downloadData = fs.readFileSync(filename)
    loadedProduct = JSON.parse(downloadData)
    return loadedProduct
}


function searchingTypeFigure(filename) {
    let figure = loadProducts(filename)
    let output = {}
    let summa = 0
    if (figure[0]["x"] == figure[figure.length - 1]["x"] && figure[0]["y"] == figure[figure.length - 1]["y"]) {
        output["type"] = "figure"
    }
    else {
        output["type"] = "line"
    }
    for (let i = 0; i < figure.length-1; i++) {
        
      summa+=Math.sqrt(Math.pow(figure[i]["x"]-figure[i+1]["x"],2)+Math.pow(figure[i]["y"]-figure[i+1]["y"],2))
            
        

    }
    output["summa"] = summa
    return output
}

saveProducts("output.json", searchingTypeFigure("points.json"))
