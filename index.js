// TODO: Include packages needed for this application
import inquirer from 'inquirer'; //initalizes inquirer
import fs from 'fs'; // initializes file system
import generateMarkdown from './utils/generateMarkdown.js'; // initializes the generateMarkdown function
// TODO: Create an array of questions for user input
const questions = [ //array that holds the question objects
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
    },
    { 
        
        type: 'input',
        name: 'tests',
        message: 'Provide instructions to run tests:',
    },
    {

        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for questions:',
    },
];

// TODO: Create a function to write README file
    function writeToFile(fileName, data) { // creates and saves a new readme file
        fs.writeFileSync(fileName, data);
        console.log(`Successfully wrote to ${fileName}`);
    }
// TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then((answers) => { //displays the questions to the user
            const markdownContent = generateMarkdown(answers); // generates the markdown content using the answers
            writeToFile('README.md', markdownContent);
        });
}

// Function call to initialize app
init();
