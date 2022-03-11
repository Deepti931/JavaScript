//1) node wcat.js filepath =>displays the contents of the file in terminal.
//2)node wcat.js filepath1 filepath2 filepath3 =>displays the contents of the files in terminal in concatinated in given order
//3) node wcat.js -n file1 file2 file3 or node wcat.js -n file1
//node wcat.js f1.txt
const fs=require("fs");
let inputArr =process.argv.slice(2);
console.log(inputArr);
//console.log(input);


let filesArr=[];
let optionsArr =[];
//placed files path in filesarr
for(let i=0;i<inputArr.length;i++){
    filesArr.push(inputArr[i]);
}
console.log("files to be read are"+filesArr);

//check if allthe files are present
for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("Files does not exist");
        return;
    }
}

//content reading and appending starts
let content="";
for(let i=0;i<filesArr.length;i++){
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+"\n";
}
console.log(content);