// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            message: 'Add a link to a video showing the user how to use the application.'
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
            message: 'Enter your GitHub Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
        },
    ])
};

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}

// Function call to initialize app
questions()
    .then(answers => {
        return generateReadme(answers);
    })
    // using data to display on page 
    .then(data => {
        return writeToFile(data);
    })
    // catching errors 
    .catch(err => {
        console.log(err)
    })
