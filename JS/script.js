// output psw
const outputTag = document.getElementById ('outPut');

// name

const name = prompt('Whats your name?');

console.log(name);

// lastname

const lastName = prompt('Whats your lastname?');

console.log(lastName);

// color 

const prefColor = prompt('Whats your preferite color?');

console.log(prefColor);

// number password generator

const numberGen = 23;

console.log(numberGen);


// psw generated

const pswGen = name + lastName + prefColor
+ numberGen ;

console.log(pswGen);

// remove spaces

// const pswGen_noSpaces = pswGen.split(" ").join("");

let pswGen_noSpaces = pswGen.replace(/ +/g, "");

// add pswGen to html

outputTag.innerHTML = pswGen_noSpaces;