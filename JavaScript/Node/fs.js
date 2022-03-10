//fs->file sysytem module
const fs=require("fs");//require("path_of_the_file");
const abc=require("../temp");
console.log(abc);

//appendfilesync appends data into a file,if file is not present it creates the file and then it appends the data.
let res=fs.appendFileSync("f1.txt","Hello I am f2 file");
fs.appendFileSync("f1.txt","\n You guys are smart")
console.log(res);

let data=fs.readFileSync("f1.txt","utf-8");
console.log(data);