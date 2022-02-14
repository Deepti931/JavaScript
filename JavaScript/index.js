// starting JS->JavaScript
// var let const

//variable declration
//var a;//int string float?

//variable initialization
//a=10;
//console.log(a);
//console.log(typeof a);

//a="hello";
//console.log(a);

//console.log(typeof a);
//a=true;
//console.log(a);
//console.log(typeof a);

//a=null;
//console.log(a);
//console.log(typeof a);

//Number
//var num=10;
//console.log(num);
//var float=2.4;
//console.log(float);

//Boolean
//var t=true;
//var f=false;
//console.log(t);
//console.log(f);

//String
//'', "" ,``
//Single quotes, double quotes, backtick
//var str='a';
//console.log(typeof str);
//str="How you doin ?\n i am fine. how about you ?";
//backslash n("/n")
//console.log(str);

//var b=`hi hope you guys are
//able grasp the concepts`;
//console.log(b);

//var num= 4500;
//console.log(`half of ${num} is ${num/2}`);

//let keyword is used
//let l=100;
//console.log(l);

//let l=200;//SyntaxError: Identifier'l' has already been declared
//console.log(l);

//we can reintialize a variable but we cannot redeclare it
//l=300;
//console.log(l);

//loop in JS
var num=10;
for(var i=0;i<num;i++){
    if(i%2==0){
        console.log("num is even");
    }
}

//const keyword
const a=2;
console.log(a);

//2nd problem with var keyword
//var keyword is function scoped in case of function else it is global scope
//let keyword is block scoped

let j=20;
for(var i=0; i<num; i++) {
    let j=20;
    if (i%2==0){
        var hello=1000;
        console.log(i);
        console.log(hello);
    }
    console.log("inner"+j);
}
console.log("outer"+j);
console.log("value of i is" +i);
console.log(hello);//error dega hello is not defined