// Arrays

// const myArray=[1,2,3,4,5]
// console.log(typeof myArray)   //object
// console.log(myArray)

// const array1=["hero","superman","shaktiman"]

// const array2=new Array(1,2,3,4)
// console.log(array2[2])   //3

// // Array method

// array2.push(5) //add the element in last
// array2.push(6)
// console.log(array2)  //[1,2,3,4,5,6]
// array2.pop()    //remove last element
// console.log(array2)  //[1,2,3,4,5]

// array2.unshift(8)    //add element on first
// console.log(array2) //[8,1,2,3,4,5]
// array2.shift()  //[1,2,3,4,5]-->remove first element

// console.log(array2.includes(5))  //true
// console.log(array2.indexOf(5)) //4

// //const newArray=array2.join() //Adds all the elements of an array into a string
// console.log(newArray)    //1,2,3,4,5
// console.log(typeof newArray)  //string

// //slice ,splice
// console.log("A",array2)   //A [ 1, 2, 3, 4 ]

// const newArray2=array2.slice(1,3)
// console.log(newArray2)  //[ 2, 3 ]

// console.log("B",array2)  //B [ 1, 2, 3, 4 ]

// const newArray3=array2.splice(1,3)
// console.log("C",array2)
// console.log(newArray3)  //[ 2, 3, 4 ]

const hero=["thor","Ironman","spiderman"]
const dc_hero=["superman","flash","batman"]

//hero.push(dc_hero)
// console.log(hero)  //['thor','Ironman','spiderman',['superman','flash','batman' ]]
// console.log(hero[3][1])  //flash

// const allheros=hero.concat(dc_hero)
// console.log(allheros)  //[ 'thor','Ironman','spiderman','superman','flash','batman' ]

// const all_new_hero=[...hero,...dc_hero]
// console.log(all_new_hero) //['thor','Ironman','spiderman','superman','flash', 'batman' ]


// console.log(Array.isArray("Lalbabu")) //false
// console.log(Array.from("Lalbabu"))  //[ 'L', 'a', 'l', 'b', 'a', 'b','u']
// console.log(Array.from({name:"Lalbabu"})) //[] 

let score1=100
let score2=200
let score3=300
let score4=400
// convert the element in array
console.log(Array.of(score1,score2,score3,score4)) //[100,200,300,400]


