let defaultState = 0;

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
prevBtn.disabled = true;

let activeIndex = 0;

function handleNextClick() {
    activeIndex++;

    const currentStepper = document.getElementById(Number(activeIndex));
    [...currentStepper.children].forEach(stepper => stepper.classList.add('active'));

    if (activeIndex === 3) nextBtn.disabled = true;
    if (activeIndex > 0) prevBtn.disabled = false;
};



function handlePrevClick() {
    const currentStepper = document.getElementById(Number(activeIndex));
    [...currentStepper.children].forEach(stepper => stepper.classList.remove('active'));
    activeIndex--;
    if (activeIndex < 3) nextBtn.disabled = false;
    if (activeIndex === 0) prevBtn.disabled = true;
};

nextBtn.addEventListener('click', handleNextClick);
prevBtn.addEventListener('click', handlePrevClick);