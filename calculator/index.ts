#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const timer = ()=>{
    return new Promise ((res)=>{
        setTimeout(res, 2000);
    })
}


async function Welcome() {
    let maintitle = chalkAnimation.radar("lets Start Calculation");
    await timer();
    maintitle.stop();
    console.log(chalk.cyanBright(`     _____________________
    |  _________________  |
    | | Rohail       0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `));

    
    
}

 await Welcome(); 


 async function askQuestion() {
    const answers =await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type : "list",
        name : "operator",
        message: "Which operation do you want?",
        choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"]
    },
    {
        type : "number",
        name : "num1",
        message : "Enter First Number:"
    },
    {
        type : "number",
        name : "num2",
        message : " Enter Second Number:"
    }
])
    if(answers.operator == "Addition"){
        console.log(chalk.magenta(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if(answers.operator == "Subtraction"){
        console.log(chalk.redBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if(answers.operator == "Multiplication"){
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if(answers.operator == "Division"){
        console.log(chalk.yellowBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    }
                                   
//askQuestion();

async function startAgain() {
    do{
        await askQuestion();
        var again = await  inquirer
        .prompt({
            type : "input",
            name : "restart",
            message :"Do you want to continue? Press y or n:"
        })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES')
}


startAgain();