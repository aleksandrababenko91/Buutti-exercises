//Add a getArea method to the Shape class, which returns 0.
//Add a Rectangle class that is derived from the Shape class. 
//The class must have a getArea method that returns the area of the rectangle.
//Similarly to point 1, add a Ellipse class that is derived from the Shape class. 
//Hint: an ellipse’s area is pi * width / 2 * height / 2
//Similarly to point 1, add a Triangle class that is derived from the Shape class
//Create some shapes of each type and call their getArea functions to make sure that your code works.

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea(area) {
        return  0;
    }
}
class Rectangle extends Shape {
    getArea(area) {
        return this.width*this.height;
    }
}
class Ellipse extends Shape {
    getArea(area) {
        return Math.PI * (this.width / 2) * (this.height / 2);
    }
}
class Triangle extends Shape {
    getArea(area) {
        return (this.width*this.height)/2;
    }
}

const triangle = new Triangle(10, 20);
console.log("Area of Triangle: ", triangle.getArea());

const ellipse = new Ellipse(5, 8);
console.log("Area of Ellipse: ", ellipse.getArea());

const rectangle = new Rectangle(15, 18);
console.log("Area of Rectangle: ", rectangle.getArea());