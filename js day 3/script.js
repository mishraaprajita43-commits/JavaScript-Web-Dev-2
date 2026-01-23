//push (element):Adds an element to the end of the array and returns the new length the array.
/*let fruits = ["apple,banana"];
 let newLength = fruits.push ("cherry"); //3
console.log(newLength);*/


// pop(): Removes the last element from the array and returns that element
/*let array = ["apple", "banana", "cherry"];
let removed = array.pop(); // "cherry"

console.log(removed); // cherry
console.log(array);   // ["apple", "banana"]*/


// shift(): Removes the first element from the array and returns that element.
/*let fruit = ["apple", "banana", "cherry"];

let removed = fruit.shift(); // "apple"

console.log(removed); // apple
console.log(fruit);   // ["banana", "cherry"]*/


// unshift(element): Adds one or more elements to the beginning of the array
// and returns the new length.
/*let fruit = ["banana", "cherry"];

let newLength = fruit.unshift("apple"); // 3

console.log(newLength); // 3
console.log(fruit);     // ["apple", "banana", "cherry"]*/


//Q1. reerse the array using push using push and pop method 
/*let arr = [1,2,3,4,5];
let reverse=[]

while (arr.length>0){
    reverse.push(arr.pop())
}
console.log(reverse);*/


//Q.2 remoe all negative numbere from an array
let numbers = [2, -3, 4, -1, 0, 6, -7];

let result = numbers.filter(num => num >= 0);

console.log(result);



//q.3 check if array is palindrome or not.
/*let arr = [1, 2, 3, 2, 1];

let reversed = [...arr].reverse();

let isPalindrome = arr.join() === reversed.join();

console.log(isPalindrome); */ // true 
