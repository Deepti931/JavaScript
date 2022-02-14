//Strings is a sequence of characters

var str="Hello pepcoders";
//0,1,2,3,4
console.log(str);

console.log(str[4]);
console.log(str.length);

//strings method

//1. Extraction method

//slice method
//slice(start,end)-> start index is inclusive and end index is exclusive

                     //(start,end)
let slicedStr = str.slice(2,7);//2nd index se shuru hoga or 6th index tak straight kategi
console.log(slicedStr);
console.log(str);//original source of information is not changed