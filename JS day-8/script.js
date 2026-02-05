//Task-1
const profile = document.getElementById("profile");
profile.style.color="pink";
profile.style.backgroundColor="black";
profile.style.padding="20px";
profile.style.textAlign="center"
//Task-2
const highlight = document.getElementsByClassName("important");
console.log(highlight);
for (let i=0; i<highlight.length; i++){
    highlight[i].style.color="Blue";
    highlight[i].style.fontSize="30px";
}

