const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');

function setCard() {
  const card = document.getElementById(cardOne.value);
  card.style.color = cardTwo.value;
}