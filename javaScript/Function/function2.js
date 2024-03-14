
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500))

const user ={
    userName:"Lalbabu",
    price:999
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject ({
    userName:"sam",
    price:599
})

const myArray =[200,300,500,400]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myArray)) //500




