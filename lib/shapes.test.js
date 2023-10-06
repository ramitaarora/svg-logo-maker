const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const shapeColour = "green";
    const textColour = "white";
    const logoText = "exp";
    const shape = "Circle"
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shapeColour}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${logoText}</text>
</svg>`
    const circle = new Circle(logoText, textColour, shape, shapeColour);
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// describe("Triangle", () => {
//   test("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
//     const triangle = new Triangle();
//     triangle.setColor("bisque");
//     const actualSvg = triangle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
//     const triangle = new Triangle();
//     triangle.setColor("purple");
//     const actualSvg = triangle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });

// describe("Square", () => {
//   test("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
//     const square = new Square();
//     square.setColor("dodgerblue");
//     const actualSvg = square.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="red" />';
//     const square = new Square();
//     square.setColor("red");
//     const actualSvg = square.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });
