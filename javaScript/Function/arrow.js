const user={
    username:"Lalbabu",
    price:99,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this)
    }

}
// user.welcomeMessage() //Lalbabu,welcome to website
// user.username="babu"
// user.welcomeMessage()  //babu,welcome to website

// console.log(this)

// function chai(){
//     let username="Lalbabu"
//     console.log(this)
// }
// chai()

// const chai=function(){
//     let username="Lalbabu"
//     console.log(this)
// }

// Arrow function
// const chai=() =>{
//     let username="Lalbabu"
//     console.log(this.username)
// }
// chai()

// const add=(num1,num2)=>{
//     return num1+num2
// }

// implesite 
// const add=(num1,num2)=> num1+num2

const add=(num1,num2)=>(num1+num2)

console.log(add(6,8))









