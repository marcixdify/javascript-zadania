//zadanie 1
function showText() {
console.log("Udało się");
}
showText();

//zadanie 2
function showText(text){
console.log(text);
}
showText("example text");

//zadanie 3
const names = ['Marek', 'Damian', 'Ola', 'Mikołaj', 'Ania'];
function showNames(array) {
    return array;
}
console.log(showNames(names));

//zadanie 4
function showString(str) {
counter = 0;
let interval = setInterval(function () {
console.log(str);
counter++;
if (counter === 5) {
clearInterval(interval);
console.log("Koniec");
}
}, 200)
}

showString("Marcin");
