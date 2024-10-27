let btnNew = document.querySelector('.btn-new');
let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
let dice = document.querySelector('.dice');

let randomNumber = Math.floor((Math.random() *6) +1 );
dice.src = 'img/dice-'+ randomNumber + 'png';