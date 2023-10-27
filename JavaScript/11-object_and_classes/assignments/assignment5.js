class Room {
    constructor(width, height, furniture = []) {
        this.width = width;
        this.height = height;
        this.furniture = furniture;
    }
    getArea() {
        return this.width*this.height;
    }
    addFurniture(string) {
        return this.furniture.push(string);
    }
}
const room = new Room(4.5, 6.0);
console.log("A): ", room); // Room { width: 4.5, height: 6 }
console.log("B): The area of room is: ", room.getArea());
room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log("C): Added furniture to room: ", room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
