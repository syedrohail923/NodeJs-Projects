#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let pNo = Math.floor(Math.random() * 3);
let user = await inquirer.prompt({
    name: "num1",
    type: "list",
    message: "Choose the Number",
    choices: ["1", "2", "3"]
});
if (pNo == user.num1) {
    (console.log(chalk.bold.magenta("Congratulations, You Won")));
}
else {
    console.log(chalk.bold.bgGreen("Sorry! better luck next time"));
}
