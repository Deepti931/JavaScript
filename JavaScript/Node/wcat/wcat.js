//1) node wcat.js filepath =>displays the contents of the file in terminal.
//2)node wcat.js filepath1 filepath2 filepath3 =>displays the contents of the files in terminal in concatinated in given order
//3) node wcat.js -n file1 file2 file3 or node wcat.js -n file1
//node wcat.js f1.txt
const fs=require("fs");
let inputArr =process.argv.slice(2);
console.log(inputArr);
//console.log(input);


let filesArr=[];
let optionArr =[];
//==========> placed files path in filesarr <==========
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    //console.log(firstChar);
    if(firstChar=='-'){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
    //filesArr.push(inputArr[i]);
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
    content+=fileContent+"\r\n";//"\r\n" for window laptop
}
console.log(content);

let contentArr=content.split("\r\n");//"\r\n" for window laptop
console.log(contentArr);

//check if -s is pesent or not
let tempArr=[];
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
    
    //push everything in contentArr except null
    for(let i=0;i<contentArr.length;i++){
        if(tempArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after removing extra lines\n",tempArr);
}

console.log(contentArr);


let indexOfN = optionArr.indexOf("-n");
let indexOfB= optionArr.indexOf("-b");
//if -n or -b is not found,-1 is returned

let finalOption="";
//if both -n and -b are present
if(indexOfN!=-1 && indexOfB!=-1){
    if(indexOfN< indexOfB){
        finalOption="-n";
    }else{
        finalOption="-b";
    }
}
//either -n or -b is present
else{
    if(indexOfN != -1){
        finalOption="-n";
    }
    else if(indexOfB != -1){
        finalOption="-b";
    }
}

//calling of functions by evaluating finalOptions
if(finalOption=="-n"){
    modifyContentByN();
}
else if(finalOption=="-b"){
    modifyContentByB();
}

function modifyContentByN(){
    for(let i=0;i< contentArr.length;i++){
        contentArr[i]=(i+1) +") "+contentArr[i];
    }
}
function modifyContentByB(){
    let count =1;
    for(let i=0;i< contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=count +") "+contentArr[i];
            count++ ;
        }
    }

}


console.log(contentArr);
