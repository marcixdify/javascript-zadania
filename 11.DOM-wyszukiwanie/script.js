//zadanie 1
const el = document.querySelectorAll('.list');

//zadanie 2
function getElements(element) {
const elements = document.querySelectorAll(element);
return elements;
}

const elem = getElements('div');
console.log(elem);

//zadanie 3
const elem = document.getElementById('list');
console.log(elem);

//zadanie 4
function getElements(elem) {
elem.forEach(element => console.log(element));
}

getElements(document.querySelectorAll('li'));
getElements(document.querySelectorAll('ul'));
getElements(document.querySelectorAll('span'));
getElements(document.querySelectorAll('div.list > span'));
getElements(document.querySelectorAll('div#spans > span'));
