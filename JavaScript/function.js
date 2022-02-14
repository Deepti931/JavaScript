//3 types of function

//Normal function

//function definition
//function function_name(param1,param2){
    //do something
//}

//function invoke
//function_name(args1,args2);

function add(a,b){
    return a+b;
}
let ans = add(2,6);
console.log(ans);

function calculator(str,a,b){
    if(str=='add'){
        return function add(){
            console.log(a+b);
        }
    }
    //else if(str=='sub'){

    //}
}

let returnedFunc = calculator('add',2,3);
console.log("returned function is\n" +returnedFunc);
returnedFunc();

//2) Function Expression
//let variable name= function () {
    //do something
//}
//name of variable is used to invoke the functions
//variable_name();

let sayHi = function abcd(){
    console.log("hello guys i am function expression");
}

sayHi();
//abcd();//error abcd is not defined

//3)IIFE-> Imediately invoke function expression

function add(a,b){
    return a+b
}
add(2,3);

let additionIIFE = (function add(a, b){
    return a+b;
})(20,30);

console.log(additionIIFE);
//console.log(additionIIFE(20,30));