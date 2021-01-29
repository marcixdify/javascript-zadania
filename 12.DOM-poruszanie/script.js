//zadanie 1
//1)
console.log(document.getElementById('buz').parentNode);
//2)
console.log(document.getElementById('baz').previousElementSibling);
//3)
console.log(document.getElementById('foo').children);
//4)
console.log(document.getElementById('foo').parentNode);
//5)
console.log(document.getElementById('foo').firstElementChild);
//6)
var elem = document.getElementById('foo').children;
console.log(elem[Math.floor(elem.length / 2)]);

//zadanie 2
function clkBtn(e) {
const btn = document.querySelector(e);
btn.addEventListener('click', (i) => {
console.log(i.target.textContent);
});
}
clkBtn('#ex2');

//zadanie 3
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
button.addEventListener("click", () => {
const span = button.nextElementSibling;
if (span.style.display === "none") {
span.style.display = "block";
} else {
span.style.display = "none";
}
});
})

//zadanie 4
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
button.addEventListener("click", () => {
var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
button.parentElement.style.backgroundColor = randomColor;
});
})

//zadanie 5
function changeColor() {
var element = document.getElementById('ex5');
element.querySelectorAll('div').forEach((div) => {
div.onmouseover = () => {
var elem = element.querySelectorAll('li:first-of-type');
var elem = element.querySelectorAll('li:last-of-type');
var elem = element.querySelectorAll('li:nth-of-type(2n)');
var elem = element.querySelectorAll('li');
var elem = element.querySelectorAll('ul');
elem.forEach(el => el.style.color = div.style.backgroundColor);
};
});
}

changeColor();

//zadanie 6
var elem = document.getElementById('ex6')
var firstElem = elem.firstElementChild.firstElementChild.firstElementChild;
var secondElem = elem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
var thirdElem = elem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(firstElem, secondElem, thirdElem);
