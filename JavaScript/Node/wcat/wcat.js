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
//==========> placed files path in filesarr <==========
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    //console.log(firstChar);
    if(firstChar=='-'){
        optionsArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
    filesArr.push(inputArr[i]);
}
console.log("files to be read are"+filesArr);

//==========> check if all the files are present <==========
for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("Files does not exist");
        return;
    }
}

//==========> content reading and appending starts <========
let content="";
for(let i=0;i<filesArr.length;i++){
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+"\n";
}
console.log(content);

let contentArr=content.split("\n");
console.log(contentArr);

//check if -s is pesent or not
let isSPresent=optionArr.includes("-s");
if(isSPresent){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]==""&& contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    let tempArr=[];
    //push everything in contentArr except null
    for(let i=0;i<contentArr.length;i++){
        if(tempArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after removing extra lines\n",tempArr);
}

console.log(contentArr);