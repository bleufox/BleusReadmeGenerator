// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your application.'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please describe your application.'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Please describe your application.'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please describe your application.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please describe your application.'
    }
    {
        type: 'input',
        name: 'license',
        message: 'Please describe your application.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        writeToFile('README2.md', generateMarkdown({ ...userInput}))
    })
}

// Function call to initialize app
init();
