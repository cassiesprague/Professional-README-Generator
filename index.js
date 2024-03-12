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
        message: "What is a short description of your project? Explain what the motivation was of your project and why you built it.",
        name: "description",
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

// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.error(err) : console.log(success)
//     );
// }



// .then((answers) => {
//     console.log(answers);
// });
// TODO: Create a function to write README file
// Below is the link to the video I used to help me get this function. I am currently not sure if
// this is even going to workerData, but I will try it out. If it doesnt work I will try another way.
// https://www.youtube.com/watch?v=9YivEQFpmHQ

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created README.md file')
    );
}
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd().fileName).data);
// }

// TODO: Create a function to initialize app
//Used same link as above to try to get this to work. Still working on
// function init() {
// inquirer.prompt(questions).then((answers) => {
//         console.log("Creating Professional README.md File");
//         writeToFile("PRF", generateMarkdown({...answers}));
// });
// }
function init() {
    inquirer.prompt(questions).then((answer) => {
        const readMePage = generateMarkdown(answer);
        writeToFile("README.md",readMePage);
    });
}

// Function call to initialize app
init();
// inquirer.prompt()