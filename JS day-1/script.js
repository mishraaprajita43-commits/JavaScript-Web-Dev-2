//types of function
//1. regular function

function sample(){
    console.log("sample")
}
sample()

function sample(a){
    console.log(a,"sample")
}
sample(5)
 
function sample(a){
    return "sample";
}
console.log(sample(5));

//2. arrow function

const sample=()=>console.log("sample")
sample()

const sample=()=>"sample"
console.log(sample());

const sample=(a,b)=>a+b;
console.log(sample(5,10));

//it doesn't need return statement and it follows asynchronous operation

const sample=(a,b)=>{
    return a+b;
}
console.log(sample(5,10))

//3. callback function 
//in callback fnction if we pass a fn as an argument inside another fn
//callback=demo()
function sample(callback){
    console.log("sample");
    callback();
}

function demo(){
    console.log("demo");
}
sample(demo);
