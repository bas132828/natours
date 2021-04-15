"use strict";

const heading = document.querySelector(".heading-primary-main");
const headingSub = document.querySelector(".heading-primary-sub");
const button = document.getElementById("btn");
let firstWord;
let rest;

const adviceFn = async function () {
  const resp = await fetch(" 	https://api.adviceslip.com/advice");
  const data = await resp.json();
  //   console.log(data);
  const adviceStr = data.slip.advice;
  console.log(` INITIAL STRING IS: ${adviceStr}`);
  firstWord = adviceStr.split(" ")[0];
  //   console.log(firstWord);
  rest = adviceStr.slice(firstWord.length, adviceStr.length);
  console.log(rest);
};

adviceFn();

button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(firstWord);
  heading.innerHTML = firstWord;
  headingSub.innerHTML = rest;
});
