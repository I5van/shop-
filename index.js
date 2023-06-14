const { response } = require('express')
const express = require('express')
const fs = require("fs");
const app = express()

let result = openFile("input.txt")
let products=loadProducts("products.json")

console.log(products)



app.set("view engine","ejs")
const port = 3000
app.get("/", (request, response) => {
    context={
        
    }
    response.render("index", context)
    
    // response.sendFile(__dirname + "/index/index.html")
})
app.listen(port, () => {
    console.log("Start to listen port")
})
app.use(express.static("static"))
app.get("/catalogue", (request, response) => {
   
    context={
        
        products : products
    }
    response.render("catalogue", context)
})
function getNumbers(){
    let numbers=[]
    for(let i =0;i<10;i++){
        numbers.push(Math.floor((Math.random()*100)))
    }
    return numbers
}


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
