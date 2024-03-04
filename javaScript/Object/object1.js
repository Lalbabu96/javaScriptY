
// object literals

const mySymbol=Symbol("key1")

const user={
    name:"Lalbabu",
    "full name":"Lalbabu Singh",
   [ mySymbol]:"mySymbol1",
    age:20,
    location :"Bhopal",
    email:"lalbabu@gmail.com",
    isLogged:false,
    lastLoginDays:["Monday","Tuesday","Thusday"]
}

// console.log(user.name)  //Lalbabu
// console.log(user["name"])  //Lalbabu
// console.log(user["full name"])
// console.log(typeof user[mySymbol])  //string

// user.email="lalbabu122@gmail.com"
// console.log(user.email)     //lalbabu122@gmail.com

// if lock the object(do not change value)
//Object.freeze(user)
//user.email="github@gmail.com"
// console.log(user.email)      //lalbabu122@gmail.com
// console.log(user)

user.greeting=function(){
    console.log("Hello JS users")
}
user.greetingTwo=function(){
    console.log(`Hello JS users,${this.name}`)  //Hello JS users,Lalbabu
}
// console.log(user.greeting())
// console.log(user.greetingTwo())
// user.greetingTwo()   //Do not show undefined on terminal






