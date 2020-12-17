//Required
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);


const installationChoices = ['npm init', 'npm install inquirer', 'other(please add manually into your generated readme)'];
const licenseChoices = ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Unlicensed'];

// Get user input

const userQuestions = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            default: "Project Title",
        },
        {
            type: 'input',
            message: "Please describe your project.",
            name: 'description',
            default: "This application will generate a README file for your current project."
        },
        {
            type: 'checkbox',
            message: "Please select installations required.",
            choices: installationChoices,
            name: 'installations',
        },
        {
            type: 'input',
            message: "Please instruct user how to run your program.",
            name: 'usage',
        },

        {
            type: 'input',
            message: "If applicable, please instruct others how to contribute to your project.", 
            name: 'contributing',
            default: "Please contact me for more information"
        },
        {
            type: 'input',
            message: "If applicable, please give instructions for testing.",
            name: 'testing',
        },
        {
            type: 'list',
            message: "Please select license used.",
            choices: licenseChoices,
            name: 'license',
        },
        {
            type: 'input',
            message: "What is your GitHub username (no @ required)?",
            name: 'username',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        }
    ]);

    
// function to initialize program
function init() {
    userQuestions()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Generated your markdown file.'))
        .catch((err) => console.error(err))
};


init();


