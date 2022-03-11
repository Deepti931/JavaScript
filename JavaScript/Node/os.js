const os=require("os");
//returns the underlying architecture
let mySystemArch = os.arch();
console.log(mySystemArch);

//return information on the cpus
let myCpuInfo=os.cpus();
console.log(myCpuInfo);

//returns the host name of the operating system as a string
let hostName= os.hostname();
console.log(hostName);
//returns an object containing network interfaces that have been assigned a network address.
 let networkInfo=os.networkInterfaces();
 console.log(networkInfo);

 //returns the operating system as a  string.
 console.log(os.release());
 
 //returns a string identifying the operating platform system.
 console.log(os.platform());

//
 //returns the total amount of system memory in bytes as an integer.
 console.log(os.totalmem());

 //returns the system uptime in number of seconds.
 console.log(os.uptime());
 let uptimeInMin =os.uptime()/3600;
 console.log(uptimeInMin);

 //returns information about the currently effective user
 console.log(os.userInfo());

 //returns the operating system's default directory for temporary files as a string.
 console.log(os.tmpdir());