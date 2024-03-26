#!  /usr/bin/env node

import inquirer from "inquirer"

// We when ever this programe run so 
// 1) Computer Will Generate a Random Number

// 2) User input for Guessing Number

// 3) Compare user input with computer generated number and show result

const ramdomNumber =Math.floor(Math.random() * 10 + 1);



const answere = await inquirer.prompt([
    {
       name : "userguessnumber",
       type :"number",
       message : "please guess a number between 1-10",

    
    }
])

if(answere.userguessnumber === ramdomNumber){
    console.log("Congratulation your guessing number is right")
}
else{
    console.log("Your guessing number is wrong")
}

console.log(answere)