// TODO: Include packages needed for this application
// Below is the const necessary for the application which are the Inquire Package, fs which 
// is for Node.js, utils folder which holds the generateMarkdown, and generateMarkdown which
// allows marked text to be converted to various formats. Along with going through the class activities,
// I also used the following links to help me find the correct format for the below const.
// https://www.w3schools.com/nodejs/nodejs_modules.asp
// https://www.w3schools.com/nodejs/nodejs_url.asp

const inquirer = requirer("inquirer");
const fs = require("fs");
const utils = reauire("util");
const genMkdn = require(".utils/generateMarkdown");


// TODO: Create an array of questions for user input
// Below is the questions array that allows users to input their answers. I looked back at the class
// activities and found how to do the array in 19-Ins_Inquirer-Demo. I used the given link below to look
// at what a professional readme should contain and added all fields even if some are not applicable at
// the moment.
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    }
    {
        type: "input",
        message: "What is a short description of your project? Explain what the motivation was of your project and why you built it.",
        name: "description",
    }
    {
        type: "input",
        message: "",
        name: "",
    }
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    }
    {
        type: "input",
        message: "What are the instructions and examples for usage?",
        name: "usage",
    }
    {
        type: "input",
        message: "If there were any collaborators for this project, list them here. Also list any third-party assets or links you used here.",
        name: "credits",
    }
    {
        type: "input",
        message: "What license did your project have?",
        name: "license",
        choices: ["Apache", "ISC", "MIT", "No License"]
    }
    {
        type: "input",
        message: "Does your project have any badges? If so, list them here.",
        name: "badges",
    }
    {
        type: "input",
        message: "List the features of your project here.",
        name: "features",
    }
    {
        type: "input",
        message: "Would you like your project to allow others to contribute to it? If so, describe here how to contribute.",
        name: "contributing",
    }
    {
        type: "input",
        message: "Did you write tests for your project? If so, describe here how to run them.",
        name: "tests",
    }
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    }
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
//Need to figure out how to add a table of contents and a questions section
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
