// const tinderUser = new Object() ---> Singleton object

const tinderUser = {} // ----> Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Ritu Raj"
tinderUser.isLoggedin = false

// console.log(tinderUser)

const regularUser ={
    email: "riturajgudakesh@gmail.com",
    fullname:{
        userfullname : {
            firstname : "Ritu",
            lastname : "Raj"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}


const obj4 = {obj1 , obj2}

const obj5 = Object.assign({}, obj1,obj2,obj3)

const obj6 = {...obj1, ...obj2, ...obj3}

console.log(obj4)
console.log(obj5)

console.log(obj6)

const users = [
    {
        id: 1,
        email: "itu@gmail.com"
    },
    {
        id: 3,
        email: "ritu@gmail.com"
    },
    {
        id: 3,
        email: "titu@gmail.com"
    }
]

// now if you want to access a particular object inside of an array

users[1].email

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedin'))
