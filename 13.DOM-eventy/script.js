//zadanie 1
//1)
document.getElementById('test-event').addEventListener('click', function(event) { 
console.log(event) 
})
//2)
window.addEventListener('mousemove', function(event) { 
console.log(event) 
})
//3)
document.getElementById('test-event').addEventListener('mouseover', function(event) { 
console.log(event) 
})
//4)
window.addEventListener('keydown', function(event) { 
console.log(event) 
})
//5)
window.addEventListener('scroll', function(event) { 
console.log(event) 
})
//6)
document.getElementById('input-test').addEventListener('change', function(event) { 
console.log(event)
})

//zadanie 2
const button = document.querySelector('#ex2');
button.addEventListener('click', (e) => {
button.nextElementSibling.textContent = e.target.getAttribute('data-text');
});

//zadanie 3
function changeColor(){
document.querySelector('#ex3').addEventListener('mouseover', (event) =>{
event.target.style.backgroundColor = 'blue';
});
document.querySelector('#ex3').addEventListener('mouseout', (event) =>{
event.target.style.backgroundColor = 'red';
});
}
changeColor();

//zadanie 4
function checkNumber(){
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const text = document.querySelector('#ex3-err');
document.querySelector('#input-test').addEventListener('keydown', (event) => {
if(event.key in numbers){
text.textContent = 'Nie wpisuj cyfr!';
}
});
}

checkNumber();

//zadanie5
const buttonClick = document.querySelector('#ex5-button');
const span = document.querySelector('#ex5 span');

let i = 0;
buttonClick.addEventListener('click', (e) => {
i++;
if (i <= 10) {
span.textContent = i;
}
buttonClick.removeEventListener('click', e);
});

//zadanie 6
function scroll(){
document.addEventListener("scroll", () => {
if(window.scrollY > 200){
document.body.style.backgroundColor = 'red';
}else{
document.body.style.backgroundColor = 'white';
}
})};
scroll();

//zadanie 7
let calc = document.querySelector('#calculator > input');
let clickIsEval = false;
let clickIsClear = false;
const signs = ['/', '*', '+', '-'];
function calculator(){
document.querySelectorAll('#calculator > div > button').forEach((elem) => {
elem.addEventListener('click', (event) => {
if (clickIsClear !== false) {
calc.value = "";
clickIsClear = false;
}
calc.value += event.target.innerText;
if (clickIsEval !== false) {
calc.value = eval(calc.value);
clickIsEval = false;
clickIsClear = true;
}
if (signs.includes(event.target.innerText)) {
clickIsEval = true;
}
});
});
}

calculator();
