'use strict';

const startButton = document.querySelector('.game__button');
const cardList = document.querySelector('.card__list');

let availableFlips = 2;
let previousCardElement;

const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

startButton.addEventListener('click', startGame);
setDefaultNumber(localStorage.getItem('cardNumber'));

function setDefaultNumber(number) {
  const radios = document.querySelectorAll('input[type="radio"]');
  for (const radio of radios) {
    if (number === radio.value) {
      radio.checked = true;
    }
  }
}

function startGame() {
  event.preventDefault();
  const inputSelect = document.querySelector('input:checked');
  localStorage.setItem('cardNumber', inputSelect.value);
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
  const newFrontImage = document.createElement('img');
  newFrontImage.classList.add('card__front-img');
  newFrontImage.alt = name;
  newFrontImage.src = image;
  const backImage = document.createElement('img');
  backImage.classList.add('card__back-img');
  backImage.alt = 'Adalab card';
  backImage.src = 'assets/images/adalab.png';

  newLi.appendChild(newFrontImage);
  newLi.appendChild(backImage);

  newLi.addEventListener('click', turn);

  cardList.appendChild(newLi);
}

function turn(event) {
  const currentCard = event.currentTarget;
  if (canFlipCard(currentCard) && availableFlips) {
    flipCard(currentCard);
    availableFlips--;

    if (!canFlipOtherCard()) {
      const cardsAreEqual = checkCards(previousCardElement, currentCard);
      if (cardsAreEqual) {
        //SI HAY MÁS CARTAS SIN CARD--FLIPPED PUEDES SEGUIR JUGANDO. SI NO, MENSAJE DE FIN DE JUEGO.
        // TODO
      } else {
        //TEMPORIZADOR PARA QUE SE GIREN LAS CARTAS
        flipCard(previousCardElement);
        flipCard(currentCard);
      }
      availableFlips = 2;
    }

    previousCardElement = currentCard;
  }
}

function checkCards(previousCardElement, actualCard) {
  const previousPair = previousCardElement.getAttribute('data-pair');
  const actualPair = actualCard.getAttribute('data-pair');

  return previousPair === actualPair;
}

function canFlipCard(eventLi) {
  const eventImg = eventLi.querySelector('.card__front-img');
  return !eventImg.classList.contains('card--flipped');
}

function flipCard(eventLi) {
  const eventImg = eventLi.querySelector('.card__front-img');
  eventImg.classList.toggle('card--flipped');
}

function canFlipOtherCard() {
  return availableFlips > 0;
}
