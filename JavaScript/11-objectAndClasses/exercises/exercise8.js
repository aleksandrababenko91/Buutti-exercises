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
        return Math.PI * (this.width / 2) * (this.height / 2);;
    }
}
class Triangle extends Shape {
    getArea() {
        return (this.width*this.height)/2;
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}
class Circle extends Ellipse {
    constructor(axis) {
        super(axis, axis);
        this.axis = axis;
    }
}
const square = new Square(10);
console.log("Area of square: ", square.getArea());

const circle = new Circle(20);
console.log("Area of circle: ", circle.getArea());

const square1 = new Square(90);
console.log("Area of square: ", square1.getArea());

const circle1 = new Circle(1200);
console.log("Area of circle: ", circle1.getArea());