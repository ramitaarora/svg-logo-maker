let inquirer = require('inquirer');
const fs = require('fs');

// Parent Class

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
            return newCircle.render();
        }
        else if (this.shape === 'Triangle') {
            let newTriangle = new Triangle(this.logoText, this.textColour, this.shape, this.shapeColour);
            return newTriangle.render();
        }
        else if (this.shape === 'Square') {
            let newSquare = new Square(this.logoText, this.textColour, this.shape, this.shapeColour);
            return newSquare.render();
        }
        else {
            console.log('Error');
        }
    }
}

// Specific Shape Classes

class Circle extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
</svg>`;
    }
}

class Triangle extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>      
</svg>`;
    }
}

class Square extends Shape {
    constructor(logoText, textColour, shape, shapeColour) {
        super(logoText, textColour, shape, shapeColour)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>      
</svg>`
    }
}

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
            let fileName = `${logoText.toLowerCase()}.svg`;
            fs.writeFile(fileName, fileData, (err) =>
            err ? console.log(err) : console.log('Success!')
            )
        });
}

// Function call to initialize app

init();
