const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const shapeColour = "green";
    const textColour = "white";
    const logoText = "exp";
    const shape = "Circle"
    const width = 300;
    const height = 200;
    const shapeCode = 'circle';
    const expectedSvg = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <${shapeCode} cx="150" cy="100" r="80" fill="${shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${logoText}</text>
</svg>`
    const circle = new Circle(logoText, textColour, shape, shapeColour);
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a bisque polygon element", () => {
    const shapeColour = "bisque";
    const textColour = "white";
    const logoText = "exp";
    const shape = "Triangle"
    const width = 300;
    const height = 200;
    const shapeCode = 'polygon';
    const expectedSvg = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <${shapeCode} points="150, 18 244, 182 56, 182" fill="${shapeColour}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColour}">${logoText}</text>      
</svg>`
    const triangle = new Triangle(logoText, textColour, shape, shapeColour);
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a blue square element", () => {
    const shapeColour = "blue";
    const textColour = "white";
    const logoText = "exp";
    const shape = "Square"
    const width = 300;
    const height = 200;
    const shapeCode = 'rect';
    const expectedSvg = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <${shapeCode} x="90" y="40" width="120" height="120" fill="${shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${logoText}</text>      
</svg>`
    const square = new Square(logoText, textColour, shape, shapeColour);
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});