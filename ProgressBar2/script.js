
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress-bar');
const steppers = document.querySelectorAll('.progress-stepper');

let currentActiveStepper = 1;

const handleNextClick = () => {
    currentActiveStepper++

    if (currentActiveStepper >= steppers.length) {
        nextBtn.disabled = true;
    };

    if (currentActiveStepper > 1) {
        prevBtn.disabled = false
    };

    const barWidth = Math.round(((currentActiveStepper - 1) / (steppers.length - 1)) * 100);
    progressBar.style.width = barWidth + '%';
    steppers[currentActiveStepper - 1].classList.add('active');

};

const handlePrevClick = () => {
    currentActiveStepper--

    if (currentActiveStepper <= 1) {
        prevBtn.disabled = true
    };

    if (currentActiveStepper > 1 || currentActiveStepper < 4) {
        nextBtn.disabled = false
    };

    const barWidth = Math.round(((currentActiveStepper - 1) / (steppers.length - 1)) * 100);
    progressBar.style.width = barWidth + '%';
    steppers[currentActiveStepper].classList.remove('active');
};

nextBtn.addEventListener('click', handleNextClick);
prevBtn.addEventListener('click', handlePrevClick);
