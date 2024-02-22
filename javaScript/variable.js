const accountId=145266                 // It is not change the value

let accountEmail="lalbabu@gmail.com"   // it is change the value

var accountPassword="1234567"         //it is change the value

accountCity="Bihar"                   //It is also change value

// accountId=2
/**
 * const do not change the value
 */
console.log(accountId)

accountEmail="abcd@gmail.com"
accountPassword="78954"
accountCity="Buxar"


/**
 * Prefer not use "var" because of issue in block scope and functional scope("{}")
 */

console.table([accountEmail,accountPassword,accountCity])


