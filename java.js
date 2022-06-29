const newCard = document.querySelector('#newCard');
newCard.addEventListener('click', displayResult);

let cardImage = document.querySelector('#cardImage');
let cardHolder = document.querySelector('#cardHolder');
let cardNameHeader = document.querySelector('#cardNameHeader');

function displayResult() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }    
    let randomNumber= getRandomInt(52);
    
    let fullUrl = `https://deckofcardsapi.com/api/deck/new/draw/?count=${randomNumber}`;
    fetch(fullUrl)
     .then(res => res.json())
     .then(data => {

        cardImage = document.createElement('img');
        cardImage.setAttribute('src', data.cards[randomNumber-1].image);

        cardHolder.innerHTML = '';
        cardHolder.appendChild(cardImage);

        cardNameHeader.innerHTML = '';
        cardNameHeader.innerHTML += `${data.cards[randomNumber-1].value} of ${data.cards[randomNumber-1].suit}`
        })
    }   