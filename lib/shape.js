const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

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

module.exports = Shape;