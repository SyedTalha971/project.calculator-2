import inquirer from "inquirer";
for (; true;) {
    console.log("\n");
    const answer = await inquirer.prompt([
        { message: "Enter first number !",
            type: "number",
            name: "firstNumber"
        },
        { message: "Enter Second number !",
            type: "number",
            name: "secondNumber"
        },
        { message: "Select one of the operator to perform action",
            type: "list",
            name: "operator",
            choices: ["Addition➕", "Subtraction➖", "Multiplication✖️", "Divide➗"]
        }
    ]);
    if (answer.operator === "Addition➕") {
        console.log(`\nYour value is ${(answer.firstNumber + answer.secondNumber)}😊😊`);
    }
    else if (answer.operator === "Subtraction➖") {
        console.log(`\nYour value is ${(answer.firstNumber - answer.secondNumber)}😊😊`);
    }
    else if (answer.operator === "Multiplication✖️") {
        console.log(`\nYour value is ${(answer.firstNumber * answer.secondNumber)}😊😊`);
    }
    else if (answer.operator === "Divide➗") {
        console.log(`\nYour value is ${(answer.firstNumber / answer.secondNumber)}😊😊`);
    }
    else
        console.log("Eroooooooooooooooorrrrrrrrr");
}
