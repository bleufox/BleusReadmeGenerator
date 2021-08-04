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
        message: 'What is the title of your application?',
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("Please provide a valid title for your application.")
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your application.',
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("Please provide a valid XX for your application.")
            }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide the installation instructions for the application.',
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("Please provide a valid XX for your application.")
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Please provide the usage information of your application.',
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("Please provide a valid XX for your application.")
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please describe your application.',
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("Please provide a valid XX for your application.")
            }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please describe your application.',
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("Please provide a valid XX for your application.")
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please describe your application.',
        choices: ['Apache-2.0-only', 'MIT', 'ISC', 'BSD'],
        validate: function (answer){
            if (answer.length < 1) {
                return console.log("")
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
        writeToFile('README2.md', generateMarkdown({ ...userInput }))
    })
}

// Function call to initialize app
init();
