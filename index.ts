#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([{
    type: "input",
    name: "typscript",
    message: "Enter your Typesript Marks",
    validate:(val)=>{
        if(isNaN(val) || val<0 || val>100){
            return "Please enter a valid number between 0 and 100"
            } else {
                return true;
            }
    }},
    {
        type: "input",
        name: "java",
        message: "Enter your Java Marks",
        validate:(val)=>{
            if(isNaN(val) || val<0 || val>100){
                return "Please enter a valid number between 0 and 100"
                } else {
                    return true;
    }}},
    {
        type: "input",
        name: "python",
        message: "Enter your Python Marks",
        validate:(val)=>{
            if(isNaN(val) || val<0 || val>100){
                return "Please enter a valid number between 0 and 100"
                } else {
                    return true;
    }}},
        {
            type: "input",
            name: "c",
            message: "Enter your C++ Marks" , 
            validate:(val)=>{
                if(isNaN(val) || val<0 || val>100){
                    return "Please enter a valid number between 0 and 100"
                    } else {
                        return true;
        }}},
    ]);

    let total = parseInt(answer.typscript) + parseInt(answer.java) + parseInt(answer.python) + parseInt(answer.c);
    let percentage = Math.floor((total / 400) * 100);
    let grade;
    if (percentage >= 90) {
        grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
            } else if (percentage >= 70) {
                grade = "B+";
                } else if (percentage >= 60) {
                    grade = "B";
                    } else if (percentage >= 50) {
                        grade = "C+";
                        } else if (percentage >= 40) {
                            grade = "C";
                            } else if (percentage >= 33) {
                                grade = "D";
                                } else {
                                    grade = "F";
                                    }
                                    console.log(chalk.green("Your Percentage is " + percentage + "%")); 
                                    console.log(chalk.green("Your Grade is " + grade));
                                    
