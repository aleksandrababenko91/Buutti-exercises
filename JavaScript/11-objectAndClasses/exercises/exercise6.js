class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    areaOfRectangle(area) {
        return this.width*this.height;
    }
}
const rectangle1 = new Rectangle(20, 10);
console.log("Area of first rectangle: ", rectangle1.areaOfRectangle());

const rectangle2 = new Rectangle(15,25);
console.log("Area of second rectangle: ", rectangle2.areaOfRectangle());


