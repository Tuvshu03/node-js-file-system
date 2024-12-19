
// let fs = require('fs');

// fs.writeFile('mynew.txt', 'dgjkadsghakdslgajkdsgksad', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// fs.readFile('task1.txt', function(err, data){
// console.log(data.toString())
// })
// console.log("readfile called ");

// problem1
// const { log } = require('console');
// const fs = require('fs'); 
// const text = fs.readFileSync('task1.txt', "utf-8");
// let arr = text.split(" ");
// for(let i=0; i<arr.length; i++){
// if(arr[i] === "banana"){
//     console.log(arr[i+1]);
//     break;
// }
// }
 

// problem2
const fs =require('fs');
const data = fs.readFileSync("",   { encoding: 'utf8', flag: 'r' });
console.log(data);
