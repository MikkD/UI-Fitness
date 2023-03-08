//without toggle methods
const accordionItems = document.querySelectorAll('.accordion-item');

function handleAccordionClick(event) {
    const clickedAccordionId = event.currentTarget.id

    accordionItems.forEach((accordion) => {
        const isActiveAccordion = accordion.classList.contains('active');

        if ((clickedAccordionId === accordion.id) && !isActiveAccordion) {
            return accordion.classList.add('active')
        };

        if ((clickedAccordionId === accordion.id) && isActiveAccordion) {
            return accordion.classList.remove('active')
        };
    })
};

accordionItems.forEach((accordion) => accordion.addEventListener('click', handleAccordionClick))
