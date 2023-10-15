let applyFilterButton = document.querySelector(".btn")
let clothesSize = document.querySelector("#clothes-size")
let glovesSize = document.querySelector("#gloves-size")
let bootsSize = document.querySelector("#boots-size")
let clothesInput = clothesSize.querySelector("input")
let glovesInput = glovesSize.querySelector("input")
let bootsInput = bootsSize.querySelector("input")
let ItemTypeCheckboxes = document.querySelectorAll("input[id^='item-type']")
let minCost = document.querySelector("#product-cost-min")
let maxCost = document.querySelector("#product-cost-max")
let toBasket = document.querySelector("#busket-button")
let basket = []
let basketButtonCount= document.querySelector(".basket-count")
let buttonBasketOpen = document.querySelector("#toBasket")
let basketPopup = document.querySelector(".basket-background")
let basketCloseButton = document.querySelector(".close-button img")
let basketTotalPrice=document.querySelector(".basket-price")
let basketContent = document.querySelector(".popup-content")
let formPopup = document.querySelector(".form-popup-background")
let basketFormationButton=document.querySelector(".price-button")
let surname = document.querySelector("#surname")
let username = document.querySelector("#name")
let email = document.querySelector("#email")
let phoneNumber = document.querySelector("#phone-number")
let formPopupButton = document.querySelector(".form-popup-button")




buttonBasketOpen.onclick= basketAppear
basketCloseButton.onclick=basketClose
function basketAppear(){
 basketPopup.style.display="flex"
 basketRender()
}
function saveBasket(){
    let dataToSave  = JSON.stringify(basket)
    sessionStorage.setItem("basket",dataToSave)
}
function loadBasket(){
    let dataToLoad=sessionStorage.getItem("basket")
    if (dataToLoad){
    basket=JSON.parse(dataToLoad)
    basketButtonCount.innerHTML=basket.length
    
   basketButtonCount.style.display="block"
}
}


basketFormationButton.onclick= formationPopupAppear
formPopupButton.onclick=makeOrder
function makeOrder(){
    localStorage.setItem("name", username.value)
    localStorage.setItem("surname",surname.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("phone-number", phoneNumber.value)
     
    
}



function formationPopupAppear(){
    formPopup.style.display ="flex"
    email.value=localStorage.getItem("email")
    username.value=localStorage.getItem("name")
    surname.value=localStorage.getItem("surname")
    phoneNumber.value=localStorage.getItem("phone-number")
}
function basketClose(){
    basketPopup.style.display="none"
}
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

let n = createParamObj()
console.log(n)

function applyFilter() {
    filters = {}
    filters.category = categoryCheck()
    filters.price = priceCheck()
    sizes = getSizes()
    console.log(sizes)


    if ("glovesSize" in sizes) {
        filters.glovesSize = sizes.glovesSize
    }
    if ("clothesSize" in sizes) {
        filters.clothesSize = sizes.clothesSize
    }
    if ("bootsSize" in sizes) {
        filters.bootsSize = sizes.bootsSize
    }
    console.log(filters)
    let urlParams = createURLParams(filters)
    window.location.replace(window.location.origin + window.location.pathname + urlParams)
}
function getSizes() {
    let sizeObject = {}
    if (glovesSize.style.display == "block") {
        sizeObject.glovesSize = [glovesInput.value]
    }
    if (clothesSize.style.display == "block") {
        sizeObject.clothesSize = [clothesInput.value]
    }
    if (bootsSize.style.display == "block") {
        sizeObject.bootsSize = [bootsInput.value]
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
function priceCheck() {
    price = []
    price.push(minCost.value)
    price.push(maxCost.value)
    if (Number(price[0]) < 0) {
        price[0] = "0"
    }
    if (Number(price[1]) < 0) {
        price[1] = "100000"
    }
    if (Number(price[0]) > Number(price[1])) {
        price[1] = "100000"
        price[0] = "0"
    }
    if (Number(price[1]) > 100000) {
        price[1] = "100000"
    }
    if (Number(price[0]) > 100000) {
        price[0] = "0"
    }
    if (Number(price[1]) == 0) {
        price[1] = "100000"
        price[0] = "0"
    }
    return price
}
function applyCategoryCheckbox(categories) {
    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < ItemTypeCheckboxes.length; j++) {
            if (ItemTypeCheckboxes[j].id == `item-type-${categories[i]}`) {
                ItemTypeCheckboxes[j].checked = true
            }
        }
    }

}
function applyPrice(price) {
    minCost.value = price[0]
    maxCost.value = price[1]


}

let temp=null
function addToBasket(event) {
    let basketObj ={}
    let size=event.currentTarget.parentNode.parentNode.querySelector("[choice='true']")
    size = size.innerHTML
    let price = event.currentTarget.parentNode.parentNode.querySelector("#card-price")
    price = price.innerHTML
    let title = event.currentTarget.parentNode.parentNode.querySelector("#card-title")
    title=title.innerHTML
    temp = event.currentTarget.parentNode.parentNode.querySelector("#card-title")
    console.log(event.currentTarget.parentNode.parentNode.querySelector("[choice='true']"))
    console.log(event.currentTarget.parentNode.parentNode.querySelector("#card-price"))
    console.log(event.currentTarget.parentNode.parentNode.querySelector("#card-title"))
    console.log(title)
    console.log(size)
    console.log(price)
    let image = event.currentTarget.parentNode.parentNode.parentNode.querySelector("#card-image")
    console.log(image)
    image = image.getAttribute("src")
    basketObj["title"]=title.trim()
    basketObj["size"]= size.trim()
    basketObj["price"]= price.trim()
    basketObj["image"]=image.trim()
    basket.push(basketObj)
    saveBasket()
    basketButtonCount.innerHTML=basket.length
    
   basketButtonCount.style.display="block"
    console.log(basket)
}

function addClickEvents() {
    let buttons = document.querySelectorAll(".card-button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = addToBasket
    }
}
function addSizeClicks() {
    let buttons = document.querySelectorAll(".btn-size")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = chooseSize
        
    }
}
function chooseSize(event) {
    let sizes = event.currentTarget.parentNode.querySelectorAll(".btn-size")
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].setAttribute("choice", "false")
        sizes[i].style.backgroundColor="white"
        sizes[i].style.color="#0d6efd"
       

    }
    event.currentTarget.setAttribute("choice", "true")
    event.currentTarget.style.backgroundColor ="#0d6efd"
    event.currentTarget.style.color ="white"

}
addClickEvents()



console.log(ItemTypeCheckboxes)
applyFilterButton.onclick = applyFilter

function countTotalPrice(){
    let sum = 0
    for(let i =0;i<basket.length;i++){
        sum=sum+Number(basket[i]["price"])
    }
    return sum
}
function basketRender(){
   
    let node= document.querySelector("#basket-table")
   basketContent.removeChild(node)
   let table = document.createElement("table")
   table.setAttribute("id","basket-table")
   let headers = document.createElement("tr")
   let headerPhoto = document.createElement("th")
   headerPhoto.innerHTML="Фото"
   let headerModel = document.createElement("th")
   headerModel.innerHTML="Модель"
   let headerSize = document.createElement("th")
   headerSize.innerHTML="Размер"
   let headerPrice = document.createElement("th")
   headerPrice.innerHTML="Цена"
   headers.appendChild(headerPhoto)
   headers.appendChild(headerModel)
   headers.appendChild(headerSize)
   headers.appendChild(headerPrice)
   table.appendChild(headers )
   
   
   for(let i =0; i<basket.length;i++){
    


    let photo = document.createElement("td")
    let closeButton=document.createElement("td")
    let closeButtonImg = document.createElement("img")
    closeButtonImg.setAttribute("src","img/close.png")
    closeButtonImg.setAttribute("class","close-line-button")
    let image = document.createElement("img")
    image.setAttribute("src",basket[i]["image"])
    image.setAttribute("class","popup-img")
    let model = document.createElement("td")
    model.innerHTML= basket[i]["title"]
    model.setAttribute("id","basketElementTitle")
    let size = document.createElement("td")
    size.innerHTML= basket[i]["size"]
    let price = document.createElement("td")
    price.innerHTML= basket[i]["price"]
    let tableBasketRow=document.createElement("tr")
    photo.appendChild(image)
    closeButton.appendChild(closeButtonImg)
    tableBasketRow.appendChild(photo)
    tableBasketRow.appendChild(model)
    tableBasketRow.appendChild(size)
    tableBasketRow.appendChild(price)
    tableBasketRow.appendChild(closeButton)

    table.appendChild(tableBasketRow)
    
    closeButtonImg.onclick=deleteBasketElement
}
basketContent.appendChild(table)
let totalPrice = countTotalPrice()
basketTotalPrice.innerHTML="Итого: "+totalPrice
basketButtonCount.innerHTML=basket.length
    
basketButtonCount.style.display="block"
if(basket.length==0){
    basketButtonCount.style.display="none"
}

}

function deleteBasketElement(event){
console.log("Удаление элемента")
let target = event.currentTarget.parentNode.parentNode.querySelector("#basketElementTitle").innerHTML

for(let i =0;i<basket.length;i++){
    console.log(basket[i]["title"])
    if(basket[i]["title"] == target){
        basket.splice(i,1)
        console.log("удаление произошло")
        
    }
}
    basketRender()
}


window.onload = () => {
    addSizeClicks()
    let params = createParamObj()
    if ("category" in params) {
        applySizeRanges(params["category"])
        applyCategoryCheckbox(params["category"])
    }
    if ("price" in params) {
        applyPrice(params["price"])
    }
    if ("glovesSize" in params) {
        glovesInput.value = params["glovesSize"][0]
    }
    if ("clothesSize" in params) {
        clothesInput.value = params["clothesSize"][0]
    }
    if ("bootsSize" in params) {

        bootsInput.value = params["bootsSize"][0]
    }
    loadBasket()
}
