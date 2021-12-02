/*
p1 = {
    name: "Albert",
    firstName: 'Shophie',
}

p2 = {
    name: "Adams",
    firstName: 'Ansel',
}

function greetFunction(){
    console.log('Hello ' + this.fistName);
}

list = [5,4,7,8,12,1,5,8,45,2];
console.log(Math.max(...list));
console.log(Math.max.apply({}, list));
*/

/******************* 
 * Shape
********************/

// Constructeur
function Shape(color){
    this.color = color;
}
// Méthode
Shape.prototype.fill = function(){
    console.log("filled shape");
}

Shape.prototype.calcArea = function(){
    throw "Not implemented";
}

 /******************* 
 *     Circle       *
 *******************/
// Fonction constructeur
function Circle(radius, color){
    // Appel au constructeur du parent
    Shape.call(this, color);
    this.radius = radius;
    /*
    this.calcArea = function(){
        return Math.PI * this.radius ** 2;
    }*/
}

// Héritage
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const calcAreaFunction = function(){
    return Math.PI * this.radius ** 2;
}

Circle.prototype.calcArea = calcAreaFunction;   

// Création d'un objet à partir de Circle
const c1 = new Circle(5, "red");
const c2 = new Circle(10, "blue");

console.log(c1.calcArea(), c2.calcArea());
c1.fill();

console.log(c1);
console.log(c2);


// fonction d'héritage
Object.prototype.inheritFrom = function(parent){
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

// Créer un constructeur Square qui hérite de Shape
// Et qui possède une méthode calcArea
function Square(size, color){
    Shape.call(this, color)
    this.size = size;
}

Square.inheritFrom(Shape);

Square.prototype.calcArea = function(){
    return this.size ** 2;
}


const shapeList = [
    new Circle(2, "red"),
    new Square(5, "green"),
    new Square(4, "yellow")
];

for (let item of shapeList) {
    console.log(item.calcArea());
}

// 
console.log(shapeList)