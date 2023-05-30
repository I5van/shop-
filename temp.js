let a =["","Hello"]

let arrayFix = ()  => {
    let tempArray =[]
    for(let i = 0; i< a .length; i++){
        if(a[i]!=""){
           tempArray.push(a[i])

        }
    
    }
    return tempArray
}
a = arrayFix(a)
console.log(a)
let favouriteMovie = {
    title: "Star Wars",
    realeseDate: 1977,
    director:"George Lukas",
    mainActors:["Марк Хэмилл","Харрисон Форд", "Кэрри Фишер", "Дэвид Проуз"]
}
console.log(favouriteMovie)
console.log("Название: "+ favouriteMovie.title + ";")
console.log("Дата выхода: "+ favouriteMovie.realeseDate + ";")
console.log("Директор: "+ favouriteMovie.director + ";")
console.log("Главные актеры: "+ favouriteMovie.mainActors + ";")
function printObject(object){
    for(let key in object){
        console.log(`${key}: ${object[key]}`)
    }
}
 printObject(favouriteMovie)
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
// console.log(n)s