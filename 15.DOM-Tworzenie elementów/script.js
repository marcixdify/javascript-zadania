//zadanie 1
const div = document.createElement("div");
div.textContent = "To jest nowy element";
document.querySelector('#root').appendChild(div);

//zadanie 2
const fruitsList = document.createElement('ul');

const fruits = [
'Banan',
'Truskawka',
'Jabłko',
'Ananans',
'Brzoskwinia',
'Wiśnia',
'Gruszka',
];

fruits.forEach((fruit) => {
const li = document.createElement('li');
item.textContent = fruit;
fruitsList.appendChild(li);
});

document.getElementById('root').appendChild(fruitsList);

//zadanie 3
fruitsList.addEventListener('click', () => {
const items = fruitsList.children;
for (let i = 0; i < items.length; i++) {
if (i % 2 !== 0) {
fruitsList.removeChild(items[i]);
}
}
});

//zadanie 4
const button = document.createElement('button');
button.textContent  = 'Hide';
button.addEventListener('click', function (index) {
this.remove();
});
document.body.appendChild(button);

//zadanie 5
let randomNum = Math.floor(Math.random() * 27);
for (let a = 0; a < randomNum; a++) {
let randomDiv = document.createElement('Div');
root.appendChild(randomDiv);
randomDiv.innerHTML = 'to jest div ' + a;
}

//zadanie 6
const elements = {
div1: 'to jest div',
span1: 'to jest span',
div2: {
div3: 'to jest div',
},
span2: 'to jest span',
};

function renderElement(tag, content) {
const htmlTag = tag.replace(/[0-9]/g, '');
const element = document.createElement(htmlTag);
element.textContent = content;
document.getElementById('root').appendChild(element);
}

for (const key in elements) {
if (typeof elements[key] === 'string') {
renderElement(key, elements[key]);
} else {
for (const prop in elements[key]) {
renderElement(prop, elements[key][prop]);
}
}
}

//zadanie 7
const favfruits = ['Banan','Truskawka','Jabłko','Ananans','Brzoskwinia','Wiśnia','Gruszka',];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
favFruits.forEach(v => {
const li = document.createElement("li");
li.innerText = v;
ul1.appendChild(li);
});

const lists = [ul1, ul2];
const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
lists.forEach((ul, i) => {
if (ul.childElementCount <= 1) {
buttons[i].disabled = true;
} else {
buttons[i].disabled = false;
}
})
}

lists.forEach((ul, i) => {
buttons[i].innerText = 'MOVE';
buttons[i].addEventListener('click', () => {
const listItems = ul.querySelectorAll('li');
const childToTransfer = listItems[listItems.length - 1];
if (i === 0) {
ul2.insertBefore(childToTransfer, buttons[1]);
} else {
ul1.insertBefore(childToTransfer, buttons[0]);
}
checkButtonDisabled();
});
ul.appendChild(buttons[i]);
document.body.appendChild(ul);
});

checkButtonDisabled();

//zadanie8
const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const submit = document.createElement('button');

input1.placeholder = 'tag';
form.appendChild(input1);

input2.placeholder = 'text';
form.appendChild(input2);

input3.placeholder = 'color';
form.appendChild(input3);

input4.placeholder = 'quantity';
input4.type = 'number';
form.appendChild(input4);

submit.textContent = 'Create';
form.appendChild(submit);

document.getElementById('root').appendChild(form);

form.addEventListener('submit', createForm);

function createForm(e) {
e.preventDefault();
for (let i = 0; i < input4.value; i++) {
const formElement = document.createElement(input1.value);
formElement.textContent = input2.value;
formElement.style.color = input3.value;
formElement.style.display = 'block';
form.after(formElement);
}
}

//zadanie9
const arrHeaders = ['Name', 'Surname', 'Age', 'Childrens'];
const form = document.createElement('form');
const createButton = document.createElement('button');
const moreButton = document.createElement('button');
const deleteButton = document.createElement('button');

createButton.textContent = 'Create table';
moreButton.textContent = 'More rows';
deleteButton.textContent = 'Delete';

form.appendChild(createFields(arrHeaders));
form.appendChild(moreButton);
form.appendChild(createButton);

moreButton.addEventListener('click', () => {
const addRows = document.querySelectorAll('.more-rows');
const lastRow = addRows[addRows.length - 1];
lastRow.after(createFields(arrHeaders));
});

form.addEventListener('submit', createTable);

function createFields(el) {
let fieldsRow = document.createElement('div');
fieldsRow.className = 'more-rows';
el.forEach((value) => {
const field = document.createElement('input');
field.placeholder = value;
fieldsRow.appendChild(field);
});
return fieldsRow;
}

function createTable(e) {
e.preventDefault();

const defaultTable = document.getElementById('def-table');

if (defaultTable) {
defaultTable.remove();
}

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
const rows = document.querySelectorAll('.more-rows');

arrHeaders.forEach((header) => {
const th = document.createElement('th');
th.textContent = header;
thead.appendChild(th);
});

rows.forEach((row) => {
const tr = document.createElement('tr');
const children = Array.from(row.children);
const values = children.map((child) => child.value);
values.forEach((value) => {
const td = document.createElement('td');
td.textContent = value;
tr.appendChild(td);
});
tbody.appendChild(tr);
});

table.id = 'def-table';
table.appendChild(thead);
table.appendChild(tbody);

createButton.after(table);

form.reset();
}
document.getElementById('root').appendChild(form);

//zadanie 10
function bigLetter() {
const creatorFields = document.querySelectorAll('.more-rows input');
creatorFields.forEach((field) => {
field.addEventListener('input', (event) => {
const formattedText =
field.value.charAt(0).toUpperCase() + field.value.slice(1);
event.target.value = formattedText;
});
});
}
bigLetter();

//zadanie 11
function checkIfNumberInString(string){
const reg = /\d/g;
if(reg.test(string)){
const number = string.match(reg);
const convertedNumber = number.map(elem=>Number(elem));
const sum = convertedNumber.reduce((a,b)=>a+b);
for(let i=0;i<sum;i++){
const div = document.createElement('div');
root.appendChild(div);
div.textContent = 'Suma liczb w stringu wynosi: '+sum;
console.log(sum);
}
}
}
checkIfNumberInString('a222a');

//zadanie12
function createObj(str) {
return {
name: str
}
}
const newObject = createObj('Ala ma kota');
newObject.checkStr = function () {
if (this.name.includes('Ala')) {
this.name = this.name.replaceAll('Ala', 'Ola');
console.log(this.name);
} else {
const div = document.createElement('div');
div.innerText = 'Słowo Ala nie występuje w tekście.';
document.body.appendChild(div);
}
}
newObject.checkStr();

//zadanie 13
function returnNumberOfNumbers(string){
return string.map((string) => string.length);
}
function sumAllNumbers(string){
return string.reduce((a, b) => a += b, 0);
}
function getAverage(string){
return sumAllNumbers(string) / string.length;
}
const example = returnNumberOfNumbers(['This', 'is', 'example']);
console.log(example, sumAllNumbers(example), getAverage(example));

//zadanie 14
let obj = {
  name: '',
  surname: '',
  age: '',
};

function modify(name, surname, age) {
obj.name = 'Jenny';
obj.surname = 'Bush';
obj.age = 21;

if (obj.name.length >= 5 || obj.surname.length >= 5) {
const button = document.createElement('button');
button.textContent = 'Default values';
button.addEventListener('click', () => {
obj.name = '';
obj.surname = '';
obj.age = '';
console.log(obj);
});
document.getElementById('root').appendChild(button);
}
}
modify();
console.log(obj);
