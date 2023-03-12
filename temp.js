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
