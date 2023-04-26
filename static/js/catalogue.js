function createURLParams(obj) {
    let urlParams = "?"
    for (let key in obj) {
        let keyValue = obj[key].join()
        urlParams += key + "=" + keyValue + "&"
    }
    return urlParams
}


function glovesAppear() {
    glovesSize.style.display = "block"
}
function clothesAppear() {
    clothesSize.style.display = "block"
}
function bootsAppear() {
    bootsSize.style.display = "block"
}

function applySizeRanges(categories) {

    for (let i = 0; i < categories.length; i++) {
        switch (categories[i]) {
            case "boots":
                bootsAppear()
                break;
            case "goalkeeper":
                glovesAppear()
                clothesAppear()
                break;
            case "football-clothes":
                clothesAppear()
                break;
            case "sport-clothes":
                clothesAppear()
                break;
        }
    }
}

function createParamObj() {
    let urlParams = window.location.search
    urlParams = urlParams.slice(1, urlParams.length)
    let massiveUrlParams = []
    massiveUrlParams = urlParams.split(`&`)

    let obj = {}
    let property = ""
    let value = []
    for (let i = 0; i < massiveUrlParams.length; i++) {
        for (let j = 0; j < massiveUrlParams[i].length; j++) {
            if (massiveUrlParams[i][j] == "=") {
                console.log(massiveUrlParams)
                property = massiveUrlParams[i].slice(0, j)
                obj[property] = massiveUrlParams[i].slice(j + 1, massiveUrlParams[i].length).split(",")
                break
            }

        }

    }
    return obj
}
let n  = createParamObj() 
console.log(n)

function applyFilter() {
    filters = {}
    filters.category = categoryCheck()
    filters.price=priceCheck()
    sizes=getSizes()
    console.log(sizes)
    

    if("glovesSize"in sizes){
        filters.glovesSize=sizes.glovesSize
    }
    if("clothesSize"in sizes){
        filters.clothesSize=sizes.clothesSize
    }
    if("bootsSize"in sizes){
        filters.bootsSize=sizes.bootsSize
    }
    console.log(filters)
    let urlParams = createURLParams(filters)
    window.location.replace(window.location.origin + window.location.pathname + urlParams)
}
function getSizes(){
    let sizeObject ={} 
    if(glovesSize.style.display=="block"){
       sizeObject.glovesSize=[glovesInput.value]
    }
    if(clothesSize.style.display=="block"){
        sizeObject.clothesSize=[clothesInput.value]
    }
    if(bootsSize.style.display=="block"){
        sizeObject.bootsSize=[bootsInput.value]
    }
    return sizeObject
}

function categoryCheck() {
    let categoryType = []
    for (let i = 0; i < ItemTypeCheckboxes.length; i++) {
        if (ItemTypeCheckboxes[i].checked) {

            categoryType.push(ItemTypeCheckboxes[i].id.slice(10, ItemTypeCheckboxes[i].length))
        }
    }

    return categoryType

}
function priceCheck(){
    price=[]
    price.push(minCost.value)
    price.push(maxCost.value)
    if(Number(price[0])<0){
            price[0]="0"
    }
    if(Number(price[1])<0){
        price[1]="100000"
    }
    if (Number(price[0])>Number(price[1])){
        price[1]="100000"
        price[0]="0"
    }
    if (Number(price[1])>100000){
        price[1]="100000"
    }
    if (Number(price[0])>100000){
        price[0]="0"
    }
    if (Number(price[1])==0){
        price[1]="100000"
        price[0]="0"
    }
    return price
}
function applyCategoryCheckbox(categories) {
    for (let i = 0; i < categories.length; i++) {
        for(let j = 0; j < ItemTypeCheckboxes.length; j++){
            if(ItemTypeCheckboxes[j].id ==`item-type-${categories[i]}`){
                ItemTypeCheckboxes[j].checked   = true
            }
        }
    }

}
function applyPrice(price){
        minCost.value=price[0]
        maxCost.value = price[1]

    
}

let applyFilterButton = document.querySelector(".btn")
let clothesSize = document.querySelector("#clothes-size")
let glovesSize = document.querySelector("#gloves-size")
let bootsSize = document.querySelector("#boots-size")
let clothesInput = clothesSize.querySelector("input")
let glovesInput=glovesSize.querySelector("input")
let bootsInput = bootsSize.querySelector("input")
let ItemTypeCheckboxes = document.querySelectorAll("input[id^='item-type']")
let minCost = document.querySelector("#product-cost-min")
let maxCost = document.querySelector("#product-cost-max")
console.log(ItemTypeCheckboxes)
applyFilterButton.onclick = applyFilter



window.onload = () => {
    let params = createParamObj()
    if ("category" in params) {
        applySizeRanges(params["category"])
        applyCategoryCheckbox(params["category"])
    }
    if("price" in params){
        applyPrice(params["price"])
    }
    if("glovesSize" in params){
        glovesInput.value=params["glovesSize"][0]
    }
    if("clothesSize" in params){
        clothesInput.value=params["clothesSize"][0]
    }
    if("bootsSize" in params){
        
        bootsInput.value=params["bootsSize"][0]
    }

}
