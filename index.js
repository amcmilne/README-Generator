// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//const badges = require('badges');
const generateMarkdown = require('./generateMarkdown');


const writeFileAsync = util.promisify(fs.writeFile);

const installationChoices = ['npm init', 'npm install inquirer', 'other'];
const licenseChoices = ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Unlicensed'];


// array of questions for user
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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
        },
        {
            type: 'checkbox',
            message: "Please list installations required.",
            choices: installationChoices,
            name: 'installations',
        },
        {
            type: 'input',
            message: "Please instruction user how to run your program.",
            name: 'usage',
        },

        {
            type: 'input',
            message: "Please list instruction for others interested in contributing to this project.",
            name: 'contributing',
        },
        {
            type: 'input',
            message: "Please give instructions for testing, if applicable, and how to run.",
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
            message: "What is your GitHub username?",
            name: 'username',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        }
    ]);




// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//           return console.log(err);
//         }      
//         console.log("Your README.md file has been created")
//     });
// };  

// function to initialize program
function init() {
    userQuestions()
        .then((answers) => writeFileAsync('READMETEST.md', generateMarkdown(answers)))
        .then(() => console.log('Generated your markdown file.'))
        .catch((err) => console.error(err))
};


init();

// function call to initialize program
//init();


