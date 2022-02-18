//JavaScripts objects are always in key value pair

let obj={};  //empty object
console.log(obj);

let person = {
    //key: value
    name:"Deepti",
    age: 22 ,
    phone: 9999999999 ,
    gender: "Female" ,
    Height: "170cm"
};

console.log(`Hey ${person.name}, thank you for signing up`);
console.log(person.gender);
console.log(person["gender"]);

let str="Hello";
console.log(str.length);//dot notation
console.log(str["length"]); //square bracket notation

let captainAmerica ={
    firstName:"Steve",
    lastName:"Rogers",
    friends:["Bucky","Tony Stark","Bruce Banner"],
    age:102,
    isAvenger: true,
    address:{
        state:"Manhattan",
        city:"New York",
        country:"USA"
    },
    sayHi: function(){
        console.log(`Hello my name is $(this.firstName)`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log("printed using bracket notation" +captainAmerica["friends"][0]);
console.log(captainAmerica.sayHi); //method accessing
//nested objects
console.log(captainAmerica.address.city);

//for loop
// in keyword in JS is used to get keys from that object
for(let key in captainAmerica){
    //key
    console.log(key);
    //key jo variable hai uske andar meri key ki value padi hui hai
    //value
    //variable ke andar jo binded value hai wo chahiye
    console.log(captainAmerica[key]);//bracket notation usage
}

console.log(typeof captainAmerica.isAvenger);
console.log(typeof captainAmerica.sayHi);
console.log(typeof captainAmerica.firstName);
console.log(typeof captainAmerica.friends);

//deleting the key of an object
delete captainAmerica.lastName;
console.log(captainAmerica.lastName);
//str{
   // length:
    //toUppercase: function(){
        //for()
   // }
//}

let car={
    name:"Ferrari",
    model:2022,
    startEngine: function(){
        console.log(`starting the engine of the car ${this.name}`)
    }
}

car.startEngine();


// methods-> objects ke andar function
//console.log(str.toUpperCase());

let arr=["a","b",1,true];

arr ={
    0:"a",
    1:"b",
    2: 1,
    3:true
}

//console.log(arr.s);
// arr bhi ek object h