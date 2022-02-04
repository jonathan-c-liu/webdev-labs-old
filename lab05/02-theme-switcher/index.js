/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeToDefault = () => {
   document.querySelector("section").className = "container";
};

const changeToDesert = () => {
   document.querySelector("section").className = "container desert";
};

const changeToOcean = () => {
   document.querySelector("section").className = "container ocean";
};

const changeToHighContrast = () => {
   document.querySelector("section").className = "container high-contrast";
};

document.querySelector("#default").addEventListener('click', changeToDefault);
document.querySelector("#desert").addEventListener('click', changeToDesert);
document.querySelector("#ocean").addEventListener('click', changeToOcean);
document.querySelector("#high-contrast").addEventListener('click', changeToHighContrast);