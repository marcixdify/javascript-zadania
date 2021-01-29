//zadanie 1
class Person {
constructor(name, surname, age, country, city) {
this.name = name;
this.surname = surname;
this.age = age;
this.country = country;
this.city = city;
}

info() {
console.log(this.name, this.surname, this.age, this.country, this.city);
}

addYear() {
this.age += 1;
}
}

const person = new Person("Adam", "Nowak", 42, "Polska", "Warszawa");
person.info();
person.addYear();
person.info();
const person1 = new Person("Jan", "Kowalski", 21, "Polska", "Kraków");
person1.info();
person1.addYear();
person1.addYear();
person1.info();

//zadanie2
class Person {
constructor(name, surname, age, country, city) {
this.name = name;
this.surname = surname;
this.age = age;
this.country = country;
this.city = city;
}

info() {
console.log(this.name, this.surname, this.age, this.country, this.city);
}

addYear() {
this.age += 1;
}
}

const person = new Person("Adam", "Nowak", 42, "Polska", "Warszawa");
person.info();
person.addYear();
person.info();
const person1 = new Person("Jan", "Kowalski", 21, "Polska", "Kraków");
person1.info();
person1.addYear();
person1.addYear();
person1.info();


Person.prototype.favouriteDish = [];
Person.prototype.addFavouriteDish = function (food) {
this.favouriteDish.push(food);
}
Person.prototype.getDishes = function () {
console.log(this.favouriteDish);
}
person.favouriteDish = [];
person.addFavouriteDish("makaron");
person.getDishes();
person.addFavouriteDish("spaghetti");

person1.favouriteDish = [];
person1.addFavouriteDish("pizza");
person1.addFavouriteDish("burger");

person.getDishes();
person1.getDishes();

//zadanie 3
function Calculator(a, b) {
this.a = a;
this.b = b;

this.add = function () {
return this.a + this.b;
}
this.subtract = function () {
return this.a - this.b;
}
this.divide = function () {
if (this.b === 0) return "nie dziel przez 0";
return this.a / this.b;
}
this.multiply = function () {
return this.a * this.b;
}
}

const calculator = new Calculator(4, 0);
console.log(calculator.add());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.subtract());

//zadanie 4
let stairs = {
floor: 0,
goUp: function() {
let floor = this.floor;
floor++;
this.floor = floor;

},
goDown: function() {
let floor = this.floor;
floor--;
this.floor = floor;
},
showFloor: function() {
if (this.floor == 0) {
console.log('Jesteś na parterze.')
} else {
console.log('Jesteś na ' + this.floor + ' piętrze.');
}

}
}

stairs.showFloor();
stairs.goUp();
stairs.showFloor();
stairs.goDown();
stairs.goDown();
stairs.goDown();
stairs.showFloor();
