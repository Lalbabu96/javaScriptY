//*************************Number*******************
const n=300
console.log(n)

const num=new Number(200)
console.log(num)

// convert into string
console.log(num.toString().length) //3

console.log(num.valueOf()) //200
console.log(num.toExponential()) //2e+2

console.log(num.toFixed(2))   //200.00

const num2=123.89664
console.log(num2)
console.log(num2.toPrecision(3))

const num3=1000000
console.log(num3.toLocaleString('en-IN'))

//**************************Math*********************************

console.log(Math)
console.log(Math.round(4.6)) //5
console.log(Math.PI)  //3.141592
console.log(Math.ceil(4.6)) //5
console.log(Math.floor(4.6)) //4
console.log(Math.min(4,6,3,5,6)) //3
console.log(Math.max(4,6,8,6,34)) //34
console.log(Math.pow(2,3)) //8-->2*2*2
console.log(Math.sqrt(25)) //5

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) +1)

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min)




