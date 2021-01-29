//zadanie 1
let table = [1, 4, 8, 12];
console.log(table);

//zadanie2

const table = ["marek", "adam", 55, 22, "audi", 1];

//1)
console.log(table[0]);
console.log(table[1]);

//2)
console.log(table[table.length - 1]);

//3)
console.log(table);
//4)
table.forEach((a, i) => {
if (i % 2 == 0) console.log(a);
})

//5)
table.forEach(a => {
if (typeof a === "string") console.log(a);
})

//6)
table.forEach(a => {
if (typeof a === "number") console.log(a);
})

//zadanie 3
let num = [55, 3, 6, 22, 32, 9, 1,];

//1)
let sum = 0;
num.forEach((elem, i) => {
sum += elem;
})
console.log(sum);

//2)
let sub = 0;
num.forEach((elem, i) => {
sub -= elem;
})
console.log(sub);

//3)
avg = 0;
num.forEach((elem, i) => {
avg += elem;
})
console.log(avg / num.length);

//4)
num.forEach((elem, i) => {
if (elem % 2 == 0) console.log(elem);
})

//5)
num.forEach((elem, i) => {
if (elem % 2 != 0) console.log(elem);
})

//6
var max = 0;
for (let i = 0; i < num.length; i++) {
if (max <= num[i]) {
max = num[i];
}
}
console.log(max);
//7
var min = num[0];
for (let i = 0; i < num.length; i++) {
if (num[i] < min) {
min = num[i];
}
}
console.log(min)
//8
console.log(num.reverse());

//zad 4
let table = [1, 2, 3, 4, 5, 6];
let sub = 0;

function subTable(array) {
for (let i = 0; i < array.length; i++) {
sub += array[i];
}
return sub;
}

console.log(subTable(table));

//zad 5
let table = [1, 2, 3, 4, 5, 6];
function sum(arr) {
let avg = (table.reduce((a, b) => a + b, 0)) / table.length;
return arr.map(n => n * avg);
}
console.log(sum(table));

//zad 6
const func = (arr) => {
let sum = 0;
let counter = 0;
arr.forEach((elem, i) => {
if (elem % 2 == 0) {
sum += elem;
counter++;
}
})
let average = sum / counter;
console.log(average);
}
func([4, 3, 8, 1]);

//zad 7
let table = [9, 33, 1, 91, 2, 3];
function sortedTable(a, b) {
return a - b;
}
console.log(table.sort(sortedTable));

//zad 8
const table1 = [1, 4, 8, 12, 16, 20];
const table2 = [3, 55, 11, 22, 33, 1];
const arr = [];

function addIndexes(table1, table2) {
table1.forEach((num1, i) => {
arr.push(num1 + table2[i]);
});
return arr;
}

console.log(addIndexes(table1, table2));

//zad9
let table = [22, -11, -33, 44, -55, 66]

function tableChange(arr) {
return arr.map(n => n * -1);
}

console.log(tableChange(table));
//zad9
