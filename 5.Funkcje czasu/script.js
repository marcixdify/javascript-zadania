//zadanie1
let i = 0;
const time = setInterval(function() {
i++;
console.log("Cześć po raz " + i);
if (i >= 15) {
clearInterval(time);
}
}, 3000);

//zadanie2

const table = ["bmw", "audi", "honda", "lexus", "toyota"];

setTimeout(function () {
console.log(table);
}, 2000);

counter = 0;

let timer = setInterval(function () {
console.log(table[counter]);
counter++;
if (counter === table.length) {
clearInterval(timer);
}
}, 3000);
