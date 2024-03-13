// TODO: Include packages needed for this application
// Below is the const necessary for the application which are the Inquire Package, fs which 
// is for Node.js, utils folder which holds the generateMarkdown, and generateMarkdown which
// allows marked text to be converted to various formats. Along with going through the class activities,
// I also used the following links to help me find the correct format for the below const.
// https://www.w3schools.com/nodejs/nodejs_modules.asp
// https://www.w3schools.com/nodejs/nodejs_url.asp

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");


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
    },
    {
        type: "input",
        message: "What is a short description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What was the motivation was of your project and why did you built it?",
        name: "motivation",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the instructions and examples for usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "Would you like to include a screenshot for Usage? Use ![alt text](assets/images/screenshot.png)",
        name: "screenshot",
    },
    {
        type: "input",
        message: "If there were any collaborators for this project, list them here. Also list any third-party assets or links you used here.",
        name: "credits",
    },
    {
        type: "list",
        message: "What license did your project have?",
        name: "license",
        choices: ["Apache", "ISC", "MIT", "No License"]
    },
    {
        type: "input",
        message: "Does your project have any badges? If so, list them here.",
        name: "badges",
    },
    {
        type: "input",
        message: "List the features of your project here.",
        name: "features",
    },
    {
        type: "input",
        message: "Would you like your project to allow others to contribute to it? If so, describe here how to contribute.",
        name: "contributing",
    },
    {
        type: "input",
        message: "Did you write tests for your project? If so, describe here how to run them.",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
// Below is the link to the website that finally helped make the correct function to write the readme file. I have tried lots of 
// different ones but many of them only allowed me to view the first question but not answer it or wouldnt even let me do that. So 
// the function below taked the data from the questions above and console logs that it created the file or if it had an error it will 
// log that there was an error.
// https://tecadmin.net/node-js-write-to-file-fs-writefile-function/


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created README.md file')
    );
}

// TODO: Create a function to initialize app
// Once I was able to finally get the function above to work I was able to take a few guesses about how to get the initalizing function to 
// work. I went back to some of the previous videos and class lessons to help me figure out the correct function to initalize the pp and get
// the generate markdown to come in to play as well.

function init() {
    inquirer.prompt(questions).then((answer) => {
        const readMePage = generateMarkdown(answer);
        writeToFile("README.md",readMePage);
    });
}

// Function call to initialize app
//Below calls to initalize the app and this is always to same and has been in many videos, links, and classes
init();