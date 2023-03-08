//max height with scroll height with js 
const accordions = [
    {
        id: 1,
        title: 'Peter',
        content: '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo at corporis numquam adipisci, blanditiis velit ab pariatur iure. Sint maxime exercitationem cupiditate enim, cumque perferendis deserunt ducimus nihil laudantium sequi. '
    },
    {
        id: 2,
        title: 'Jock',
        content: '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo at corporis numquam adipisci, blanditiis velit ab pariatur iure. Sint maxime exercitationem cupiditate enim, cumque perferendis deserunt ducimus nihil laudantium sequi. '
    },
    {
        id: 3,
        title: 'Lev',
        content: '3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo at corporis numquam adipisci, blanditiis velit ab pariatur iure. Sint maxime exercitationem cupiditate enim, cumque perferendis deserunt ducimus nihil laudantium sequi. '
    },
    {
        id: 4,
        title: 'Bobenis',
        content: '4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo at corporis numquam adipisci, blanditiis velit ab pariatur iure. Sint maxime exercitationem cupiditate enim, cumque perferendis deserunt ducimus nihil laudantium sequi. '
    },
];

const accordionContainer = document.querySelector('.accordion-container');

const accordionsArray = accordions.map((accordion) => createAccordion(accordion));
function createAccordion(accordion) {
    const accordionItem = document.createElement('div');
    accordionItem.id = accordion.id;
    accordionItem.className = 'accordion-item';

    const accordionTitle = document.createElement('div');
    accordionTitle.className = 'accordion-title';
    accordionTitle.textContent = accordion.title;

    const accordionDescription = document.createElement('div');
    accordionDescription.className = 'accordion-description';
    accordionDescription.textContent = accordion.content;

    accordionItem.appendChild(accordionTitle);
    accordionItem.appendChild(accordionDescription);

    return accordionItem
};

accordionsArray.forEach((accordion) => accordionContainer.appendChild(accordion))

const accordionItems = document.querySelectorAll('.accordion-item');
const accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach((accordion) =>
    accordion.addEventListener('click', handleAccordionClick));

function handleAccordionClick() {
    const accordionItem = this.parentElement;
    const accordionContent = this.nextElementSibling;
    const clickedAccordionItemId = accordionItem.id;

    toggleAccordion(clickedAccordionItemId)

    const isClickedAccordionActive = accordionItem.classList.contains('active');
    accordionContent.style.maxHeight = isClickedAccordionActive
        ? accordionContent.scrollHeight + 'px'
        : 0
};

function toggleAccordion(clickedId) {
    accordionItems.forEach((accordion) => {
        if (clickedId === accordion.id) {
            const isActiveAccordion = accordion.classList.contains('active');
            if (isActiveAccordion) {
                accordion.classList.remove('active')
            } else {
                accordion.classList.add('active')
            }
        }
    })
};