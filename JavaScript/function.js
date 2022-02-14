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