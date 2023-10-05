let inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes.js')

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
            if (shape === 'Circle') {
                let createShape = new Circle(logoText, textColour, shapeColour);
                let fileData = createShape.render();
                let fileName = `${logoText.toLowerCase()}.svg`;
                fs.writeFile(fileName, fileData, (err) =>
                err ? console.log(err) : console.log('Success!')
                )
            }


            
            
        });
}

// Function call to initialize app

init();
