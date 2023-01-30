const cards = document.querySelectorAll('.card');

function handleCardClick(event) {
    console.log('event.target', event.target.classList)
    if ([...event.target.classList].includes('active')) return;

    // remove active class for other items
    cards.forEach(card => {
        if ([...card.classList].includes('active')) {
            card.classList.remove('active')
        }
    });

    // add active class
    event.target.classList.add('active');
}
cards.forEach((card) =>
    card.addEventListener('click', handleCardClick))


