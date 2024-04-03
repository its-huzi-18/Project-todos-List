#!/usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let againQuestion = true;
while (againQuestion) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "Welcome to the todos app! What do you want to add to your todos list?",
            validate: function (value) {
                // validate: Yeh ek property hai jo inquirer mein istemal hoti hai validation ke liye. Is property mein ek function define kiya jata hai jo input ki validity ko check karta hai Iss tareeqe se, validate function ka istemal kiya jata hai taake user ko agar koi required field khali chhod diya jata hai, toh unhe inform kiya ja sake aur woh sahi input de sake..
                if (value.trim() === "") {
                    //Yeh condition check karta hai ke agar input string sirf spaces se mila hai (ya khali hai), toh wapas "Please enter a value for todos." ka message return karta hai. trim() function istemal kiya jata hai spaces ko string ke shuru aur akhir se hataane ke liye
                    return "Please enter a value for todos.";
                }
                return true;
                // Agar input sahi hai (yani ke non-empty hai), toh yeh line true return karta hai, jisse validate function ko bata jata hai ke input sahi hai aur aage badhaya ja sakta hai.
            }
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Would you like to add more in your todos list?",
            default: true,
        },
    ]);
    todosList.push(addTask.todos);
    againQuestion = addTask.addMore;
    console.log("List = ", todosList);
    // Delete option
    while (!againQuestion && todosList.length !== 0) {
        let deleteValue = await inquirer.prompt([
            {
                name: "Delete",
                type: "confirm",
                message: "Do you want to delete the this item?",
                default: false,
            }
        ]);
        if (deleteValue.Delete) {
            todosList.pop();
            console.log("After deleting = ", todosList);
        }
        else {
            console.log("Final List =", todosList);
            break; // Exit the delete loop if the user chooses not to delete anymore
        }
        if (todosList.length === 0) {
            console.log("You don't have to delete anymore");
        }
    }
}
