console.log(window.location)

let effects = document.querySelectorAll(".effect")
function redirect(event){
    category=this.getAttribute("category")
   
    window.location.replace(window.location + `catalogue?category=${category}`)
}
for(let i = 0; i<effects.length;i++){
    effects[i].onclick= redirect
}