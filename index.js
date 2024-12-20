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
// const fs =require('fs');
// const data = fs.readFileSync("",   { encoding: 'utf8', flag: 'r' });
// console.log(data);

// import chalk from 'chalk';
// chalk = console.log(chalk.red('error'));

// import figlet from 'figlet'
// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import ora from 'ora';

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'white';
// 	spinner.text = 'Loading games';
// }, 2000);

// import pokemon from 'pokemon'

// pokemon.all();
// ['Bulbasaur']

// pokemon.random();
//  'Snorlax'

// pokemon.getName(147);
// 'Dratini'

// pokemon.getId('Dratini');
// 147
import player from "play-sound";

// $ mplayer foo.mp3
// player.play('foo.mp3', function(err){
//     if (err) throw err
//   })

//   // { timeout: 300 } will be passed to child process
//   player.play('foo.mp3', { timeout: 300 }, function(err){
//     if (err) throw err
//   })

//   // configure arguments for executable if any
//   player.play('foo.mp3', { afplay: ['-v', 1 ] /* lower volume for afplay on OSX */ }, function(err){
//     if (err) throw err
//   })

//   // access the node child_process in case you need to kill it on demand
//   var audio = player.play('foo.mp3', function(err){
//     if (err && !err.killed) throw err
//   })
//   audio.kill()

// 1.
// const questions = [
//   {
//     type: "list",
//     name: "dataType",
//     message: "What type of data would you like to generate?",
//     choices: ["User Profile", "Company Info", "Product Details"],
//   },
//   {
//     type: "number",
//     name: "count",
//     message: "How many entries would you like?",
//     default: 1,
//   },
// ];


// import { faker } from '@faker-js/faker';

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), 
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 4,
  
// });
// console.log(users
//   );


// import qr from 'qr-image';
//  import qrs from 'fs'
// let qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(qrs.createWriteStream('i_love_qr.svg'));
 
// let svg_string = qr.imageSync('I love QR!', { type: 'svg' });
// console.log(svg_string)

[
    {
      type: 'list',
      name: 'dataType',
      message: 'What type of data would you like to generate?',
      choices: ['User Profile', 'Company Info', 'Product Details']
      validate: (answers) => {
        if(answers=== "") {
            return 'please enter a valid name'
        }
      }
    },
    {
      type: 'number',
      name: 'count',
      message: 'How many entries would you like?',
      default: 1
    }
  ];


import inquirer from 'inquirer';
import { lstat } from "fs";

inquirer
  .prompt([
    [
        {
          type: 'list',
          name: 'dataType',
          message: 'What type of data would you like to generate?',
          choices: ['User Profile', 'Company Info', 'Product Details']
          validate: (answer) => {
            if(answer=== "") {
                return 'please enter a valid name'
            }
            return true
          }
        },
        {
          type: 'number',
          name: 'count',
          message: 'How many entries would you like?',
          default: 1
        }
      ];
    
  ])
  .then((answers) => {
console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });