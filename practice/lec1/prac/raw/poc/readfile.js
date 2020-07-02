let fs = require("fs");
// npm install cheerio
// cheerio module require
let cheerio = require("cheerio");
let html = fs.readFileSync("../facts/index.html","utf-8");  // uts-8 = convert , content is in buffer format(let buffer) , ".." use to 1 level up folder , next name of folder in which file present, file name, let html for content
// console.log(html);

let $ = cheerio.load(html);
// to select h1 elementfrom page
let h1 = $("h1");
// to get text
let hiKaData = h1.text();
// console.log(hiKaData);

// return array of all the elements
let a = $("a");
// print the content of all anchors
console.log(a.text());

// select element that is inside another element
let ulKaP = $("ul p");
// console.log(ulKaP.text());

// select a class
let classElem = $(".first-para");
// console.log(classElem.text());

// select all the element with para class
let allElem = $(".para");
// console.log(allElem.text());

// select a element with both classes in it
let combinedElem = $(".para.first-para");
// console.log(combinedElem.text());

// select on the basis of id
let myName = $("#unique");
// console.log(myName.text());