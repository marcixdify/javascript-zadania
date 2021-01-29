//zadanie 1
function Person(name, surname, age, country, city, language) {
this.name = name;
this.surname = surname;
this.age = age;
this.country = country;
this.city = city;
this.language = language;

this.changeAge = function (newAge) {
this.age = newAge;
};

this.changeCity = function (newCity) {
this.city = newCity
};
}

let persons = [
new Person("Adam", "Kowalski", 16, "Poland", "Warszawa", "polski"),
new Person("Jan", "Nowak", 29, "England", "Londyn", "angielski"),
new Person("Anna", "Kwiat", 55, "Poland", "Kraków", "polski"),
new Person("Beata", "Gitara", 35, "Germany", "Berlin", "niemiecki"),
new Person("Anrdzej", "Kubek", 19, "China", "Pekin", "chinese"),

];

console.log(persons);

persons.forEach(element => {
element.changeAge(20);
element.changeCity("Poznań");
});

console.log(persons);

//zadanie2
function Calc(a, sign, b) {
this.a = a;
this.sign = sign;
this.b = b;

this.result = 0;
switch (this.sign) {
case '+':
this.result = this.a + this.b;
break;
case '-':
this.result = this.a - this.b;
break;
case '*':
this.result = this.a * this.b;
break;
case '/':
this.b == 0 ? "Nie dzielimy przez zero" : this.result = this.a / this.b;
break;
}
this.clear = () => { this.result = 0 };
this.getResult = () => this.result;
};

const add = new Calc(4, '+', 12);
console.log(add.getResult());
add.clear();
console.log(add.getResult());

const div = new Calc(5, '/', 1);
console.log(div.getResult());
add.clear();
console.log(div.getResult());

//zadanie 3
function DrawOfNumber() {
this.randomNumber = () => {
DrawOfNumber.prototype.period = setInterval(() => {
DrawOfNumber.prototype.num = Math.round(Math.random() * 10);
console.log(DrawOfNumber.prototype.num);
}, 1000);
};
this.greaterThan5 = () => {
DrawOfNumber.prototype.check = setInterval(() => {
if (DrawOfNumber.prototype.num > 5) {
console.log("Większa niż 5.");
clearInterval(DrawOfNumber.prototype.period);
clearInterval(DrawOfNumber.prototype.check);
}
}, 1000);
};
}

let play = new DrawOfNumber();
let play1 = new DrawOfNumber();
play.randomNumber();
play1.greaterThan5();
