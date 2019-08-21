'use strict';

const startButton = document.querySelector('.game__button');
const cardList = document.querySelector('.card__list');

const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

startButton.addEventListener('click', startGame);

function startGame() {
  event.preventDefault();
  const inputSelect = document.querySelector('input:checked');
  getCards(inputSelect.value);
}

function getCards(number) {
  cardList.innerHTML = '';
  const numberApi = ENDPOINT + number + '.json';
  fetch(ENDPOINT + number + '.json')
    .then(response => response.json())
    .then(data => {
      for (const item of data) {
        printCard(item.pair, item.image, item.name);
      }
    });
}

function printCard(pair, image, name) {
  const newLi = document.createElement('li');
  newLi.classList.add('card__item');
  newLi.setAttribute('data-pair', pair);
  const newImage = document.createElement('img');
  newLi.classList.add('card__img');
  newImage.alt = name;
  newImage.src = image;
  newLi.appendChild(newImage);
  cardList.appendChild(newLi);
}
