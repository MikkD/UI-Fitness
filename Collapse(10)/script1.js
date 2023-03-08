//toggle api
const accordionItems = document.querySelectorAll('.accordion-item');

function handleAccordionClick() {
    this.classList.toggle('active')
};

accordionItems.forEach((accordion) => accordion.addEventListener('click', handleAccordionClick))

