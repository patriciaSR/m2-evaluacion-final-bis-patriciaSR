"use strict";const startButton=document.querySelector(".game__button"),cardList=document.querySelector(".card__list");let previousCardElement,availableFlips=2;const ENDPOINT="https://raw.githubusercontent.com/Adalab/cards-data/master/";function setDefaultNumber(t){const e=document.querySelectorAll('input[type="radio"]');for(const a of e)t===a.value&&(a.checked=!0)}function startGame(){event.preventDefault();const t=document.querySelector("input:checked");localStorage.setItem("cardNumber",t.value),getCards(t.value)}function getCards(t){cardList.innerHTML="";fetch(ENDPOINT+t+".json").then(t=>t.json()).then(t=>{for(const e of t)printCard(e.pair,e.image,e.name)})}function printCard(t,e,a){const r=document.createElement("li");r.classList.add("card__item"),r.setAttribute("data-pair",t);const n=document.createElement("img");n.classList.add("card__front-img"),n.alt=a,n.src=e;const c=document.createElement("img");c.classList.add("card__back-img"),c.alt="Adalab card",c.src="assets/images/adalab.png",r.appendChild(n),r.appendChild(c),r.addEventListener("click",turn),cardList.appendChild(r)}function turn(t){const e=t.currentTarget;if(canFlipCard(e)&&availableFlips){if(flipCard(e),availableFlips--,!canFlipOtherCard()){checkCards(previousCardElement,e)||(flipCard(previousCardElement),flipCard(e)),availableFlips=2}previousCardElement=e}}function checkCards(t,e){return t.getAttribute("data-pair")===e.getAttribute("data-pair")}function canFlipCard(t){return!t.querySelector(".card__front-img").classList.contains("card--flipped")}function flipCard(t){t.querySelector(".card__front-img").classList.toggle("card--flipped")}function canFlipOtherCard(){return availableFlips>0}startButton.addEventListener("click",startGame),setDefaultNumber(localStorage.getItem("cardNumber"));