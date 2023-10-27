class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return  0;
    }
}
class Rectangle extends Shape {
    getArea() {
        return this.width*this.height;
    }
}
class Ellipse extends Shape {
    getArea() {
        return Math.PI * (this.width / 2) * (this.height / 2);
    }
}
class Triangle extends Shape {
    getArea() {
        return (this.width*this.height)/2;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width);
    }
    getArea() {
        return this.width*this.width;
    }
}
class Circle extends Ellipse {
    constructor(diameter) {
        super(diameter);
        this.diameter = diameter;
    }
    getArea() {
        return Math.PI * this.diameter*this.diameter;
    }
}
const square = new Square(8);
console.log("Area of square: ", square.getArea());

const circle = new Circle(8);
console.log("Area of circle: ", circle.getArea());

const square1 = new Square(90);
console.log("Area of square: ", square1.getArea());

const circle1 = new Circle(1200);
console.log("Area of circle: ", circle1.getArea());

const rectangle = new Rectangle(2, 3);
console.log("Area of rectangle: ", rectangle.getArea());

const ellipse = new Ellipse(10, 20);
console.log("Area of ellipse: ", ellipse.getArea());

const triangle = new Triangle(5, 3);
console.log("Area of triangle: ", triangle.getArea());





