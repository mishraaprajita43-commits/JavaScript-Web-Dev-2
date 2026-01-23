// let starSentence = "i am a comman seprated sentences";
// let word= starSentence.split (" ");
// console.log (word); //["I","am","a","comma",
// //'seprated','sentence']

// let words2 = sentance.split ("a")
// console.log (words2)//["I", "am" , "comm,sep", "r" ,"ted  sentance" ]


//q.no.1 find out the occurrence of "r" in the given text
// let str = "tu meri me tera me tera tu meri";
// let count = str.split("r").length - 1;
// console.log(count);

//1.regular function 
// function sample(callback){
//     console.log("callback");
//     callback();
// }
// function demo(){
//     console.log("this is a demo function ")
// }
// sample(demo);


//2.Arrow fuction 
// const (demo2=)

// }console.log("demo2");
// demo2()

//first class fuction 
//1.We can push a fuction as an fuction argument inside aother function 
//3.we can return a function from a function 
 
function test (){
    return function test2(){
        console.log("test2");
        return function test3 (){
            console.log("test3")
        }
    }
}
// test()()()
let value = test ()
let value2=value()
value2()

//4.Higher function 
//Map, filture, reduce 

// 6.Anonomous function: The function which doesn't have any name

/setTimeout(()=> {

},2000);



// 7.Self invoking function (IIFE): To obtain data privacy and to call a function immediately after the function scope.

function classtest(){
    console.log("classtest")
}
let a =10;
function midterm(){
    classtest();
}
midterm()



let test5 = (function(){
    return "sample5";
})()
console.log(test5)