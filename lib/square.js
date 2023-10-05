const Shape = require('./shapes');

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

module.exports = Square;