let inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {

    }
}

class Circle extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {

    }
}

class Triangle extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        
    }
}

class Square extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        
    }
}

// Inquirer Prompts

const questions = [
    {
        type: 'input',
        message: 'Enter the text for the logo (must not be more than three characters).',
        name: 'logoText',
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
        choices: ['triangle', 'circle', 'square']
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
        .prompt(questions).then((data) => {
            let data;
            let fileName;
            fs.writeFile(fileName, data, (err) =>
            err ? console.log(err) : console.log('Success!')
            )
        });
}

// Function call to initialize app

init();
