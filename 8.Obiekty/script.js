//zadanie1
let car = {
name: "Honda",
model: "Civic",
year: 2001,
color: "silver",
}

console.log(car.name);
console.log(car.model);
console.log(car.year);
console.log(car.color);

//zadanie 2
let car = {
name: "Honda",
model: "Civic",
year: 2001,
color: "silver",
colorChange: function(e) {
this.color = e;
}
}
car.colorChange("red");
console.log(car.color);

//zadanie 3
let object = {
sum: 0,
sumFunc: function(tab) {
let result = 0;
for (let i = 0; i < tab.length; i++) {
result += tab[i]
}
this.sum = result;
}

}
object.sumFunc([1, 2, 3, 4, 5]);
console.log(object.sum);

//zadanie 4
let car = {
name: "BMW",
age: 12,
color: "red",
}
for (const key in car) {
    console.log(key + " = " + car[key]);
}
//zadanie 5
let car = {
    name: "honda",
    age: 11,
    color: "silver",
    engine: {
        type: "gasoline",
        capacity: 1.4,
    }
}

console.log(car.engine.type);
console.log(car.engine.capacity);

//zadanie 6
car.type = "hatchback";
car.engineSound = function () {
return "Hello";
}

console.log(car.type);
console.log(car.engineSound());
