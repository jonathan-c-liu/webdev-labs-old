let currHeaderFont = 2.0;
let currContentFont = 1.4;

const makeBigger = () => {
   currHeaderFont += .2;
   currContentFont += .2;
   document.querySelector("h1").style.fontSize = currHeaderFont.toString() + 'em';
   document.querySelector(".content").style.fontSize = currContentFont.toString() + 'em';
};

const makeSmaller = () => {
   currHeaderFont -= .2;
   currContentFont -= .2;
   document.querySelector("h1").style.fontSize = currHeaderFont.toString() + 'em';
   document.querySelector(".content").style.fontSize = currContentFont.toString() + 'em';
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);