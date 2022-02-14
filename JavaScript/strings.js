//Strings is a sequence of characters

var str="Hello pepcoders";
//h e l l o <space>p e p c o  d   e  r  s
//0,1,2,3,4,   5,  6,7,8,9,10,11,12,13,14
console.log(str);

console.log(str[4]);

//strings in JS are immutable
str[4]="z";
console.log(str);

console.log(str.length);

//strings method

//1. Extraction method

//slice method
//slice(start,end)-> start index is inclusive and end index is exclusive

                     //(start,end)
var slicedStr = str.slice(6,15);//2nd index se shuru hoga or 6th index tak straight kategi
console.log(slicedStr);
console.log(str);//original source of information is not changed

var slicedStr = str.slice(6);//start se lekr puri end tak string kategi
console.log(slicedStr);

var slicedStr= str.slice(6,-2);//start se leke poori end tak string kategi
console.log(slicedStr);

//substring method

//substr(start,length); start inedx se suru hoga aur age ke kitne characters capture krne hai

let ans=str.substr(2,6);
console.log(ans);
console.log(str);

//replacing
str="YOLO";
console.log(str);

//to lowercase and uppercase
console.log(str.toLowerCase());//yolo
str="fomo"
console.log(str.toUpperCase());//FOMO
console.log(str);//information is intact and has not been tampered with

//concatenation method

let firstStr="You guys";
let secondStr="Are smart";

let concatenatedStr = firstStr + secondStr;
console.log(concatenatedStr);


//trim method->remove all the white spaces of starting and ending of a string

let trimStr="                                       Hello    How are you                  ";
console.log(trimStr);
console.log(trimStr.length);

console.log(trimStr.trim());
console.log(trimStr.trim().length);