#!/usr/bin/env node
import inquirer from "inquirer";
import { Person } from "./person.js";
import { Student } from "./student.js";
let input;
let person = new Person();
let student = new Student();
let loop = false;
async function startLoop() {
    do {
        await getUserInput();
    } while (loop);
}
async function getUserInput() {
    try {
        input = await inquirer.prompt([
            {
                type: "number",
                name: "ans",
                message: "Type 1 if you like to talk to others, and type 2 if you would rather keep to your self: "
            },
            {
                type: "input",
                name: "name",
                message: "What is your name: "
            }
        ]);
        person.askQuestion(input.ans);
        console.log(`You are ${person.getPersnality()}`);
        student.setName(input.name);
        console.log(`Your name is ${student.getName()} and your personality type is ${student.getPersnality()}`);
        loop = false;
    }
    catch (err) {
        console.log(`Please enter a valid number.`);
        loop = true;
    }
}
startLoop();
