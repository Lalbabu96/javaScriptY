// Primitive data type
// 7-Types : String, Number,Boolean,Null,undefined,Symbol,BigInt


const score=100.30
console.log(score)

const isLogged=false
const outsidetemp=null
let userEmail

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId)

// Referance Type(Non-primitive)
// Array,objects,functions

const heros=["shaktiman","ajay","Babu"];
let myObj={
    name:"Lalbabu",
    age: 21
}

const myfunction=function(){
    console.log("Hello World")
}

console.log(typeof myfunction)
console.log(typeof myObj)








