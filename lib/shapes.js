
class Shape {
    constructor(logoText, textColour, shapeColour) {
        this.logoText = logoText;
        this.textColour = textColour;
        // this.shape = shape;
        this.shapeColour = shapeColour;
    }
    // render() {
    //     if (this.shape === 'Circle') {
    //         let newCircle = new Circle(this.logoText, this.textColour, this.shapeColour);
    //         return newCircle.render();
    //     }
    //     else if (this.shape === 'Triangle') {
    //         let newTriangle = new Triangle(this.logoText, this.textColour, this.shapeColour);
    //         return newTriangle.render();
    //     }
    //     else if (this.shape === 'Square') {
    //         let newSquare = new Square(this.logoText, this.textColour, this.shapeColour);
    //         return newSquare.render();
    //     }
    //     else {
    //         console.log('Error');
    //     }
    // }
}

class Circle extends Shape {
    constructor(logoText, textColour, shapeColour) {
        super(logoText, textColour, shapeColour)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
</svg>`;
    }
}

class Triangle extends Shape {
    constructor(logoText, textColour, shapeColour) {
        super(logoText, textColour, shapeColour)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>      
</svg>`;
    }
}

class Square extends Shape {
    constructor(logoText, textColour, shapeColour) {
        super(logoText, textColour, shapeColour)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>      
</svg>`
    }
}

module.exports = {Circle, Square, Triangle};