class Shape {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        console.log(this.width*this.height)
    }
}

let rec1 = new Shape(3,4);
// rec1.getArea();

class Rectangle extends Shape {
    constructor (width, height) {
        super(width, height);
    }

    getArea() {
        console.log(this.width*this.height)
    }

    getDiagonal() {
        console.log(Math.sqrt(this.width**2+this.height**2))
    }
}

let rec2 = new Rectangle(3,4);
rec2.getDiagonal();

class Triangle extends Shape {
    constructor (width, height) {
        super(width, height);
    }

    getArea() {
        console.log(this.width*this.height/2)
    }
}

let tri1 = new Triangle(3,4);
tri1.getArea();

class Circle extends Shape {
    constructor (width, height, radius) {
        super(width, height);
        this.radius = radius;
    }

    getArea() {
        console.log(this.radius**2*3.14)
    }
}

let cir1 = new Circle(6, 6, 3);
cir1.getArea();