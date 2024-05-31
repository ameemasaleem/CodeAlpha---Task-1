#! /usrbin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let doStart = true;
console.log(chalk.redBright("\n 'Welcome to our Institute's Student Management'\n "));
while (doStart) {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    let myBalance = 0;
    let studentAnswer = await inquirer.prompt([
        {
            name: "studentName",
            type: "input",
            message: chalk.yellowBright("Enter Student Name:"),
            validate: function (value){
                if (value.trim() !== "") {
                    return true;
                }
                return chalk.red("Please enter a non-empty value");
            },
        },

        {
            name: "courses",
            type: "list",
            message: chalk.greenBright("Please select any course from our given list of courses to get enrolled"),
            choices: [
                chalk.yellow("TypeScript"),
                chalk.yellow("Python"),
                chalk.yellow("App Development"),
                chalk.yellow("Email Marketing"),
                chalk.yellow("PHP"),
                chalk.yellow("Graphic Designing"),
            ],
        },
    ])
 const tutionFee = {
    [chalk.yellow("TypeScript")]: 3000,
    [chalk.yellow("Python")]: 10000,
    [chalk.yellow("App Development")]: 5000,
    [chalk.yellow("Email Marketing")]: 7000,
    [chalk.yellow("PHP")]: 35000,
    [chalk.yellow("Graphic Designing")]: 9000,
};
console.log(chalk.yellowBright('\nTution Fee: ${tutionFees[studentAnswer.courses]}\n'));
console.log(chalk.cyan(`Balance: ${myBalance}\n`));
let paymentMethod = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: chalk.red("Please select any payment method:"),
        choices: [
            chalk.yellow("Bank Transfer"),
            chalk.yellow("EasyPaisa"),
            chalk.yellow("JazzCash"),
        ],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.white("Enter Transfer amount:"),
        validate: function(value){
            if (value.trim() !== "") {
                return true;
            }
            return chalk.red("Please enter a non-empty value");
        },
    },
]);
console.log(chalk.cyan('\n You select Payment Method: ${paymentMethod.payment}'));
const tutionFees =  tutionFee[studentAnswer.courses];
const paymentAmount = parseFloat(paymentMethod.amount);
    if (tutionFees === paymentAmount) {
        console.log(chalk.yellow(`Congratulations! You have successfully enrolled in ${studentAnswer.courses} Course`));
        let answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.red("What would you like to do next?"),
                choices: [chalk.green("view status"), chalk.green("Exit")],
            }
        ]) 
        if (answer.select === chalk.green("View Status")) {
            console.log(chalk.yellow("\n---- Status ----\n"));
            console.log(chalk.yellow(`studentName: ${studentAnswer.studentName}`))
            console.log(chalk.yellow(`Student 10: ${randomNumber}`));
            console.log(chalk.yellow(`Course: ${studentAnswer.courses}`));
            console.log(chalk.yellow(`Tution Fee Paid: ${paymentAmount}`));
            console.log(chalk.yellow(`Balance: ${(myBalance += paymentAmount)}`));
        }
        else {
            console.log(chalk.white("\nExisting Student Management System----"));
        }
    }
else {
    console.log(chalk.red('Please enter Correct Amount'));
}
const startAgain = await inquirer.prompt([
    {
        type: "confirm",
        name: "continue",
        message: chalk.red("\nDo you want to Continue?\n"),
    }
])
doStart = startAgain.continue;
}

