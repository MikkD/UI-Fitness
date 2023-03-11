const MAX_AMOUNT_OF_WATER = 2000;
const MAX_AMOUNT_OF_WATER_IN_LITERS = MAX_AMOUNT_OF_WATER / 1000;
const NUMBER_OF_CUPS = 8;
const WATER_AMOUNT_PER_CUP = Math.round(MAX_AMOUNT_OF_WATER / NUMBER_OF_CUPS);
const DEFAULT_AMOUNT_OF_REMAINED_WATER = 100;

// Generate buttons and append them into the DOM
const btnsWrapper = document.querySelector('.glasses-btn-wrapper');
for (let i = 0; i < 8; i++) {
    const btn = document.createElement('button');
    btn.textContent = `${WATER_AMOUNT_PER_CUP}ml`
    btn.id = i + 1;
    btnsWrapper.append(btn);
};

//Button click handlers
const buttons = document.querySelectorAll('.glasses-btn-wrapper button');
const remainedWaterBlock = document.querySelector('.remained');
remainedWaterBlock.style.height = '100%';
const filledWatterBlock = document.querySelector('.filled');

buttons.forEach(btn => btn.addEventListener('click', drinkWaterCups));

function drinkWaterCups(event) {
    //handle filled water block 
    const numberOfConsumedWaterCups = event.target.id;
    const filledAmountOfWater = ((WATER_AMOUNT_PER_CUP * numberOfConsumedWaterCups) * 100) / MAX_AMOUNT_OF_WATER;
    filledWatterBlock.style.height = `${filledAmountOfWater}%`;
    filledWatterBlock.textContent = `${filledAmountOfWater}%`;

    //handle remained water block 
    const remainedNumberOfConsumedWaterCupsInMl = (MAX_AMOUNT_OF_WATER - (numberOfConsumedWaterCups * WATER_AMOUNT_PER_CUP)) / 1000;
    amountOfRemainedWater = DEFAULT_AMOUNT_OF_REMAINED_WATER - filledAmountOfWater;
    remainedWaterBlock.style.height = amountOfRemainedWater + '%';
    remainedWaterBlock.textContent = `${remainedNumberOfConsumedWaterCupsInMl} Liters Remained`;

    //update water cup buttons
    buttons.forEach((btn, idx) =>
        idx < numberOfConsumedWaterCups
            ? btn.classList.add('active')
            : btn.classList.remove('active'));
};


