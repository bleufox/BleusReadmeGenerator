// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions for the application.'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Please provide the usage information of your application.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your application.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide test instructions for your application.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select the applicable license for your application.',
        choices: ['Apache-2.0-only', 'MIT', 'ISC', 'BSD']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Your README has been created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        writeToFile('New1.md', generateMarkdown({ ...userInput }))
    })
}

// Function call to initialize app
init();
