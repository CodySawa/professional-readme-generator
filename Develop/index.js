// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description for the application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is used to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions to use the application?',
    },
    {
        type: 'input',
        name: 'video',
        message: 'Add a link to a video or screenshot showing the user how to use the application.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is used to run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the application',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', "Unlicense"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(data => {
            return data;
        })
}

// Function call to initialize app
init();
