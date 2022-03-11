//fs->file sysytem module
const fs=require("fs");//require("path_of_the_file");
//console.log(fs);
const abc=require("../temp");
//require method goes to the file that is needed to be require executes that file.and if there is something that is returned/exported we get that in variable'abc'
console.log(abc);
let ans=abc.add(2,4);
console.log(ans);

//appendfilesync appends data into a file,if file is not present it creates the file and then it appends the data.
let res=fs.appendFileSync("f1.txt","Hello I am f2 file");
fs.appendFileSync("f1.txt","\n You guys are smart")
console.log(res);

//datareceived is an object type,data is in buffer format.For it to be readable,we convert it from buffer to string.
let data=fs.readFileSync("f1.txt","utf-8");//automatic type conversion se buffer string mein convert ho gyi hai
console.log(data);