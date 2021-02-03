//zadanie 1
const divs = document.querySelectorAll('.more-divs');

function tagArr(tags) {
console.log([...tags].map((e) => e.tagName));
}
tagArr(divs);

//zadanie 2
var shortList = document.getElementsByClassName("short-list")[0];

function showData(shortList) {
console.log(shortList.innerHTML);
console.log(shortList.outerHTML);
console.log(shortList.className);
console.log(shortList.classList);
console.log(shortList.dataset);
}

showData(shortList);

//zadanie 3
const data = document.querySelector('#datasetCheck');
const a = Number(data.dataset.numberone);
const b = Number(data.dataset.numbertwo);
const c = Number(data.dataset.numberThree);

function getResult(a, b, c) {
let sum = a + b + c;
let subtraction = a - b - c
return [sum, subtraction];
}

console.log(getResult(a, b, c));

//zadanie 4
document.getElementById("spanText").innerHTML = "Js";

//zadanie 5
document.getElementById("spanText").className = "nowa_klasa";

//zadanie 6
var classes = document.getElementById("classes");

function manageClasses(classes) {
classes.classList.forEach(e => console.log(e));
var divClass = "";
classes.classList.forEach(e => divClass = divClass + (divClass != "" ? ' + ' : '') + e);
console.log(divClass);
classes.classList.remove(...classes.classList);
console.log("Usunięto wszystkie klasy");
}

manageClasses(classes);

//zadanie 7
const data2 = document.querySelectorAll('#longList li');

function addElems(elems) {
elems.forEach((elem) => {
if (!elem.dataset.text) {
elem.dataset.text = 'text';
}
})
}

addElems(data2);
//zadanie 8
const myDiv = document.querySelector('#myDiv');

function createObject(string) {
let object = {
newClass: string,
};
readObject(object);
}

function readObject(object) {
let newClass = object.newClass;
myDiv.className = newClass;
}

createObject('new-class');

//zadanie 9
const numbers = document.querySelector('#numbers');
const randomNumber = Math.floor(Math.random() * 11);

function addClassNameByNumber(number) {
if (number % 2 == 0 && number != 0) {
numbers.className = 'even';
} else {
numbers.className = 'odd';
}
}

addClassNameByNumber(randomNumber);

//zadanie 10
const data3 = document.querySelectorAll('#longList li');

function getTableWithElements(elems) {
let newTable = [];
elems.forEach((elem) => {
newTable.push(elem.innerText);
})
return newTable;
}

console.log(getTableWithElements(data3));

//zadanie 11
const data4 = document.querySelector('#longList').children;

function changeValues(elems) {
[...elems].forEach((elem) => {
elem.dataset.beforechanges = elem.textContent;
elem.textContent = Math.floor(Math.random() * 11);
});
};
changeValues(data4);
