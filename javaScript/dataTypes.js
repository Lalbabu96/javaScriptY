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

// console.log(typeof myfunction)
// console.log(typeof myObj)

// *********************************************************

// Stack(Primitive ) ,Heap(Non-premitive)

let myName="Lalbabu"

let anotherName=myName
//console.log(anotherName)
anotherName="Kumar"
// console.log(myName)
// console.log(anotherName)

let userOne={
    email:"compute@gmail.com",
    Name:"Vikash"
}

let userTwo=userOne
// console.log(userTwo)

userTwo.email="laptop@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)












