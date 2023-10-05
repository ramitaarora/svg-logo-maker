let inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        this.logoText = logoText;
        this.textColour = textColour;
        this.shape = shape;
        this.shapeColour = shapeColour;
    }
    render() {
        if (this.shape === 'Circle') {
            let newCircle = new Circle(this.logoText, this.textColour, this.shape, this.shapeColour);
            newCircle.render();
        }
        else if (this.shape === 'Triangle') {
            let newTriangle = new Triangle(this.logoText, this.textColour, this.shape, this.shapeColour);
            newTriangle.render();
        }
        else if (this.shape === 'Square') {
            let newSquare = new Square(this.logoText, this.textColour, this.shape, this.shapeColour);
            newSquare.render();
        }
        else {
            console.log('Error');
        }
    }
}

class Circle extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `;
    }
}

class Triangle extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        return ``;
    }
}

class Square extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        return ``;
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
            let fileName = 'test.svg';
            console.log(fileData);
            // fs.writeFile(fileName, fileData, (err) =>
            // err ? console.log(err) : console.log('Success!')
            // )
        });
}

// Function call to initialize app

init();
