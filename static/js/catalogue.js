console.log(window.location.search)
let loc = window.location.search
let categoryName = ""
for(i=0;i<loc.length;i++){
    if(i>9){
        categoryName=categoryName+loc[i]      
    }
}
console.log(categoryName)