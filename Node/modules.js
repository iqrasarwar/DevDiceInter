const fs = require("fs");
//create a new file  will overwrite
fs.writeFileSync("sync.txt","my first sync file in node");
////create a new file  will overwriteppend text to the pervious file
fs.appendFileSync("sync.txt"," appending text to the file");
//read from file
const buffer_Info = fs.readFileSync("sync.txt");
file_info = buffer_Info.toString();
console.log(buffer_Info);
console.log(file_info);

fs.renameSync('sync.txt','new.cpp');
