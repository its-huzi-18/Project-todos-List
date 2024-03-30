#! /usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let againQuestion = true;
while (againQuestion) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "Welcome in todos app!What do you want to add in your todos list",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more in your todos list ?",
            default: "false",
        },
    ]);
    todosList.push(addTask.todos);
    againQuestion = addTask.addMore;
    console.log("List = ", todosList);
}
