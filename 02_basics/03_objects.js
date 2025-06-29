// Singleton
// Object.create

// Object literal

const mysym = Symbol("Key1")

const Jsuser = {
    name: "Raj",
    age:18,
    "full name": "Ritu Raj",
    location: "Saharsa",
    [mysym] : "mykey1",
    email: "riturajgudakesh@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["sunday","monday","saturday"]
}
console.log(Jsuser)
// behind the scene here the keys like name, age, location,... e.t.c
// are stored as strings for example name is stored as "name".

console.log(Jsuser.name)
console.log(Jsuser.location)

// console.log(Jsuser[isLoggedin]) // error

// since every key is stored as an string that's why whenever you will try ki aise hi print ho jaye toh that will give you an error.

console.log(Jsuser["isLoggedin"])

console.log(Jsuser["full name"])
console.log(typeof Jsuser.mysym)
console.log(Jsuser[mysym])

// to change the value of a key value pair.

Jsuser.email = "rituraj@gmail.com"

console.log(Jsuser.email)

// and suppose if you want ki object ki value change na ho toh its really simple just use the freeze method!!

// Object.freeze(Jsuser)
Jsuser.email = "rituraj@microsoft.com"

console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())