
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', handleCardsClick);

function handleCardsClick(event) {
    const cards = cardsContainer.children;
    const clickedCardId = event.target.id;
    [...cards].forEach(card => card.className = `card ${card.id === clickedCardId ? ' active' : ''}`)
};

