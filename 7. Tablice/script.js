//zadanie 1
let table = [1, 4, 8, 12];
console.log(table);

//zadanie2

const table = ["marek", "adam", 55, 22, "audi", 1];

//1
console.log(table[0]);
console.log(table[1]);

//2
console.log(table[table.length - 1]);

//3
console.log(table);
//4
table.forEach((a, i) => {
if (i % 2 == 0) console.log(a);
})

//5
table.forEach(a => {
if (typeof a === "string") console.log(a);
})

//6
table.forEach(a => {
    if (typeof a === "number") console.log(a);
})

//zadanie 3
