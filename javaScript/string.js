const name="Lalbabu"
const count=50

// console.log(name+count)

console.log(`Hello my name is ${name} and my count is ${count}`);

const gameName=new String("candyCrush")
console.log(gameName[1])   //access the index of string

console.log(gameName.__proto__)

// console.log(gameName.length) // find the length
// console.log(gameName.toUpperCase()) //it convert into upper letter

console.log(gameName.charAt(3)) //find the char of index 
console.log(gameName.lastIndexOf("s")) //find the index of char

// substring(startIndex,endIndex)
console.log(gameName.substring(0,5))

const string1=gameName.slice(5,10)
console.log(string1)

const string2="  Lalbabu   "
console.log(string2)
console.log(string2.trim())  //trim is removes whitespace from both ends of this string

const url="https:/lalbabu.com%20kumar"
console.log(url.replace("%20","/"))

console.log(url.includes("lalbabu")) //find the value is present or not

const string3="app-ka-kya-hal-hai"
console.log(string3.split("-"))




