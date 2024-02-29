// Dates And Time

let myDate=new Date()
 console.log(myDate.toString())  //Thu Feb 29 2024 19:14:45 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Thu Feb 29 2024
console.log(myDate.toLocaleString()) //2/29/2024, 7:14:45 PM
console.log(typeof myDate) //object

let myCreateDate=new Date(2024,0,26)
console.log(myCreateDate.toDateString()) //Fri Jan 26 2024

let myCreateDate1=new Date(2024,0,26,10,35)
console.log(myCreateDate1.toLocaleString()) //1/26/2024, 10:35:00 AM

let myCreateDate2=new Date("2024-02-15")
console.log(myCreateDate2.toLocaleString()) //2/15/2024, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp)  //1709235228832 (in milliSecond)
console.log(myCreateDate.getTime()) //1707955200000 (in milliSecond)

console.log(Date.now())  //1709235367636 (in milli Second)
console.log(Math.floor(Date.now()/1000)) //1709235504 (in second)

let newDate=new Date()
console.log(newDate.getMonth()) //1 (month start with 0)(1--Feb)
console.log(newDate.getFullYear())  //2024
console.log(newDate.getDay())  //4(Thusday)

newDate.toLocaleString('default',{
    weekday: "long",
    month:"long"
})

