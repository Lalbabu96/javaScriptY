// Singleton object
const tinderUser=new Object()   //singleton object

// const user={} //non-singleton object --o/p-{}
// console.log(tinderUser)  //{}

tinderUser.id="12345"
tinderUser.name="vikash"
tinderUser.isLoggedIn=false
// console.log(tinderUser) //{ id: '12345', name: 'vikash', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            first_name:"Lalbabu",
            last_name:"kumar"
        }
    }
}
//console.log(regularUser) 
 /**{
    email: 'some@gmail.com',
    fullname: { userfullname: { first_name: 'Lalbabu', last_name: 'kumar' } }
  }*/
//console.log(regularUser.fullname) //{ userfullname: { first_name: 'Lalbabu', last_name: 'kumar' } }
//console.log(regularUser.fullname.userfullname)  //{ first_name: 'Lalbabu', last_name: 'kumar' }
//console.log(regularUser.fullname.userfullname.first_name)  // Lalbabu

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"e"}
// const obj3={obj1,obj2}
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'e' } }

// const obj4=Object.assign(obj1,obj2)
// console.log(obj4)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'e' }

const obj5={...obj1,...obj2}   //spred
console.log(obj5)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'e' }

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:3,
        email:"j@gmail.com"
    }
]

// users[1].email

console.log(tinderUser)
console.log(Object.keys(tinderUser))  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))  //[ '12345', 'vikash', false  ]
console.log(Object.entries(tinderUser)) //[['id','12345'],['name','vikash'],['isLoggedIn',false]]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) //true