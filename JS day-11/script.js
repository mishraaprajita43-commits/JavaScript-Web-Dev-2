document.getElementById("btn").addEventListener("click",()=>{
 
    const subHead = document.createElement("h2").textContent="New sub heading"
    const image=document.createElement("img");
image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

//append both h2 and image inside content div
image.setAttribute("alt","K.R Mangalam");
document.getElementById("content").append(subHead)
document.getElementById("content").append(image)

})
  