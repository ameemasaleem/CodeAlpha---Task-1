#! /usr/bin/env node

//This line is called a shebang, it tells the OS to run it with Node.js

//import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer"

//declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the world:"
    }
])
const words = answers.Sentence.trim().split(" ")

//print the array of words to the console
console.log(words)

//trim remove below spaces
// const myName = "      Ameema Saleem      "

//print the word count of the sentence to the console
console.log(`Your Sentence word count is ${words.length}`);