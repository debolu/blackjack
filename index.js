let player = {
    name: 'Obayemi',
    chips: 1000
};
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ': #' + player.chips;

function getRandomCard() {
    let getCard = Math.floor(Math.random() * 13) + 1;
    if (getCard > 10) {
        getCard = 10
    } else if (getCard === 1) {
        getCard = 11
    }
    console.log(getCard)
    return getCard;
}

function startGame() {
    isAlive = true
    if (isAlive = true && player.chips > 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()    
    } else {
        alert("You're out of chips " + player.name + ", please purchase some more chips.")
    }
}

function renderGame() {
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: '

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }

    if (sum <= 20) {
        message = "Do you want to draw another card?"
        hasBlackJack = false
    } else if (sum === 21) {
        message = "You've got blackjack."
        hasBlackJack = true
        player.chips += 100
        
    } else {
        message = "You're out of the game. Start new game?"
        isAlive = false
        hasBlackJack = false
        player.chips += -100
    }
    console.log(hasBlackJack)
    console.log(isAlive)
    messageEl.textContent = message
    playerEl.textContent = player.name + ': #' + player.chips;
    console.log(player.chips)
}
function newCard() {
    if (isAlive === true && hasBlackJack === false && player.chips > 0) {
        let newCard = getRandomCard();
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}