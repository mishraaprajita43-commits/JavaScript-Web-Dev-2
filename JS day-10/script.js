// function handleClick (){
//     const button = document.getElementById("btn");
//     button.textContent="Clicked"
// }
// function handleClick(){
//     document.querySelector("h1").style.color="red"
//     const button = document.getElementById("btn");
//     button.textContent="color Changed"
// }
//Q.3-Ans.
function handleClick(){
    const subHead = document.createElement("h2").textContent="New sub heading"
    const image=document.createElement("img");
image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")
//append both h2 and image inside content diiv

image.setAttribute("alt","K.R Mangalam");
document.getElementById("content").append(subHead)
document.getElementById("content").append(image)

}
