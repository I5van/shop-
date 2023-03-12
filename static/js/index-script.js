console.log(window.location)

let effects = document.querySelectorAll(".effect")
function redirect(event){
    category=this.getAttribute("category")
   
    window.location.replace(window.location + `catalogue?category=${category}`)
}
for(let i = 0; i<effects.length;i++){
    effects[i].onclick= redirect
}
// let b= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let comporasion = () =>{
//    let sum = 0
//     for(let i =0;i<b.length; i++){
//         sum=sum+b[i]
//     }
//     middle = sum/20
//     let j =0
//     for(i =0;i<b.length;i++){
//         if(b[i]<middle){
//             j=j+1
//         }
//     }
//     return j
//  }
// let n=comporasion(b)
// console.log(n)
// let a = [1,2,3,4,5,6,7]
// let middleItem = () => {
//     let most = 0
//     let sum =0
//     for(let i = 0; i<a.length; i++){
//         sum = sum + a[i]
//         if(a[i]>most){
//             most=a[i]
//         }
//     }
//     let middle = sum/a.length
//     let dif = most
//     let dif1 = 0
//     let number = 0
//     for(let i = 0; i<a.length; i++){
//         if (a[i]>middle){
//             dif1 = a[i]-middle
//             if(dif>dif1){
//                 dif=dif1
//                 number=a[i]
//             }
//         }
//         else{
//             dif1 = middle-a[i]
//             if(dif>dif1){
//                 dif=dif1
//                 number=a[i]
//             }
//         }
//     }
//     return number
// }
// let f = middleItem(a)
// console.log(f)
// let s =[1,2,3,4,5,6,7,8]
// function marks(){
//     let most = 0
//     let least =0

//     for(let i =0; i++; i++){
//         if (s[i]>most){
//             most = s[i]
//         }
//         if (s[i]>least){
//             least = s[i]
//         }
//     }
//     let s1 = []
//         if (least!=most){
//             for(i = 0; i<s.length;i++){
//                 if(s[i]!=most&&s[i]!=least){
//                 s1.push(s[i])}
//             }
//         }
//         else{
//             for(i=1;i<s.length;i++){
//                 if(s[i]!=most&&s[i]!=least){
//                     s1.push(s[i])}
//             }
//         }
//         let sum = 0 
//         for(i=0;i<s1.length; i++){
//             sum=sum+s1[i]
//         }
//         let j = sum/6
//         return j 
// }
// let n = marks(s)
// console.log(n)