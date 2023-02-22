const container = document.querySelector('.blocks-wrapper');
const body = document.querySelector('body');
const SCROLL_THRESHOLD = 200;


let lastScrollPosition = 0;

function handleViewScroll() {
    const blocks = container.children;
    const lastBlock = blocks[blocks.length - 1];
    const currentScrollPosition = window.scrollY;
    const isBottom = (window.scrollY + window.innerHeight) > (body.clientHeight);
    const isScrolledDown = lastScrollPosition < currentScrollPosition;
    const isScrolledUp = lastScrollPosition > currentScrollPosition;
    lastScrollPosition = currentScrollPosition;

    if (isBottom && isScrolledDown) {
        const newBlock = document.createElement('div');
        newBlock.textContent = 'New Block';
        newBlock.classList.add('blocks-wrapper__block', 'active');
        container.appendChild(newBlock);
    };


    if (isScrolledUp && (window.innerHeight - lastBlock.getBoundingClientRect().top) < SCROLL_THRESHOLD) {
        lastBlock.classList.replace('active', 'inactive');
        setTimeout(() => lastBlock.remove(), 500);

    };

};

window.addEventListener('scroll', handleViewScroll);