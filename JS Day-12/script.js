// console.log("starting script.js");

// function myWork(){
//     console.log("myWork function called");
// }
// myWork();
// console.log("ending script.js");

// setTimeout(()=>{
//     console.log("hello world")
// }, 200) //for block of code to run after
//  a certain time (200ms in this case)

// console.log("starting script.js");

// function myWork(){
//     setTimeout(()=>{
//         console.log("myWork function called");
//     },200)
// }
// myWork();
// console.log("ending script.js");

//why we use asynchronous code?
//1. to avoid blocking the main thread
//2. to improve performance
//3. to handle multiple tasks at the same time

//what is return statement
//1. it is used to return a value from a function
//2. it is used to exit a function
//3. it is used to pass a value from one function to another

// console.log("starting script.js");

// function myWork(cb){
//     setTimeout(()=>{
//         cb("myWork function called");
//         // return "myWork function called";
//     },200)
// }
// myWork((data) => {
//     console.log(data);
// });
// console.log


console.log("starting script.js");
function login(email,pass,cb){
    setTimeout(()=>{
        cb({username:email, islogged:true,message:"login successful"});
    },2000)
}

function getVideoList(cb){
    setTimeout(()=>{
        cb({videos:["video1","video2","video3"]});
    },2000)
}
login("john@example.com", "password123", (data) => {
    console.log(data);
});
getVideoList((videos) => {
    console.log(videos);
});
console.log("ending script.js");

console.log("starting script.js");
function login(email,pass,cb){
    setTimeout(()=>{
        cb({username:email, islogged:true,message:"login successful"});
    },2000)
}

function getVideoList(cb){
    setTimeout(()=>{
        cb({videos:["video1","video2","video3"]});
    },2000)
}
function getVideoDetails(video,cb){
    setTimeout(()=>{
        cb({videoTitle:video,videoduration:"2 min"});
    },2000)
}
login("john@example.com", "password123", (data) => {
    console.log(data);

getVideoList((videos) => {
    console.log(videos);
    getVideoDetails(videos.videos[0], (videodetails) => {
        console.log(videodetails);
     });
  });
});
console.log("ending script.js");