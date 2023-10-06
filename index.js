let inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js');

// Inquirer Prompts

const questions = [
    {
        type: 'input',
        message: 'Enter the text for the logo (must not be more than three characters).',
        name: 'logoText',
        validate: input => {
            if (input.length > 3) {
                return 'Logo text must not be more than three characters!'
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter text colour.',
        name: 'textColour',
    },
    {
        type: 'list',
        message: 'Select a shape for the logo.',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'Enter a shape colour.',
        name: 'shapeColour',
    },
]

// Function to write svg file

function init() {
    inquirer
        .prompt(questions).then(({logoText, textColour, shape, shapeColour}) => {
            let createShape = new Shape(logoText, textColour, shape, shapeColour);
            let fileData = createShape.render();
            let fileName = 'logo.svg';
            fs.writeFile(fileName, fileData, (err) =>
            err ? console.log(err) : console.log(`Generated ${fileName}.`)
            )
        });
}

// Function call to initialize app

init();