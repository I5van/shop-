let applyFilterButton=document.querySelector(".btn" )
// function createParamObj() {
//     let urlParams=window.location.search
//     urlParams = urlParams.slice(1,urlParams.length)
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

// let params = createParamObj()
// console.log(params)
let ItemTypeCheckboxes = document.querySelectorAll("input[id^='item-type']")
function applyFilter(){
   let categories= categoryCheck()
   console.log(categories)
}
applyFilterButton.onclick = applyFilter

console.log(ItemTypeCheckboxes)
function categoryCheck(){
     let categoryType=[]
    for(let i =0; i<ItemTypeCheckboxes.length;i++){
        if(ItemTypeCheckboxes[i].checked){

            categoryType.push(ItemTypeCheckboxes[i].id.slice(10,ItemTypeCheckboxes[i].length))
        }
    }
   
    return categoryType
    
}
