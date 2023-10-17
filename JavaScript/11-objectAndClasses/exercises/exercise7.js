class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return 0;
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

const triangle = new Triangle(10, 20);
console.log("Area of Triangle: ", triangle.getArea());

const ellipse = new Ellipse(5, 8);
console.log("Area of Ellipse: ", ellipse.getArea());

const rectangle = new Rectangle(15, 18);
console.log("Area of Rectangle: ", rectangle.getArea());