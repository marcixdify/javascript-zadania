//zadanie 1
let x = 18;
let y = 5;

if (x > y ) {
console.log("zmienna x jest większa");
} else {
console.log("zmienna y jest większa");
}

//zadanie 2
let x = 11;
let y = 22;
let z = 33;
if (x > y && x > z) {
    console.log(x);
} else if (y > x && y > z) {
    console.log(y);
} else {
    console.log(z);
}

//zadanie 3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

//zadanie 4
let result = 0
for (var i = 1; i <= 10; i++) {
result += i;
}
console.log(result);

//zadanie 5
let n = 5;
for (let i = 0; i <= n; i++) {
if (i % 2 == 0) {
console.log( i + " - parzysta");
} else {
console.log( i + " - nieparzysta");
}
}

//zadanie 6
for (let i = 1; i <= 10; i++) {
for (let j = 1; j <= 10; j++) {
console.log('i= ' + i + ', j= ' + j);
}
}

//zadanie 7
for (var i = 1; i < 101; i++) {
 if (i % 15 == 0) console.log("FizzBuzz");
 else if (i % 3 == 0) console.log("Fizz");
 else if (i % 5 == 0) console.log("Buzz");
 else console.log(i);
}

//zadanie 8
//a
for (let i = 1; i <= 5; i++) {
let row = '';
for (let j = 1; j <= i; j++) {
row += '*';
}
console.log(row);

//b
let star = ' *';

for (let x = 0; x < 5; x++) {
var result = '';
for (y = 0; y < 5 - x; y++) {
result += ' ';
}
for (z = 0; z < x + 1; z++) {
result += star;
}
console.log(result);
}

//c
let star = '*';

for (let x = 0; x < 5; x++) {
let result = '';
for (y = 0; y < 5 - x; y++) {
result += ' ';
}
for (z = 0; z < x + 1; z++) {
result += star;
}
for (v = 1; v < x + 1; v++) {
result += '*';
}
console.log(result);
}

//d
