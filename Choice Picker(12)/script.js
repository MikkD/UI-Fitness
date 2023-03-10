const textField = document.querySelector('.textfield');
const generateChipBtn = document.querySelector('.generate-btn');
const randomizeChoiceBtn = document.querySelector('.randomize-btn');
const chipsWrapper = document.querySelector('.chips');
const container = document.querySelector('.container');
let currentInputValue;
let prevRandomNumbers = [];

textField.addEventListener('input', (event) => currentInputValue = event.target.value);
generateChipBtn.addEventListener('click', generateChips);
randomizeChoiceBtn.addEventListener('click', randomizeChoice);

function generateChips() {
    if (!currentInputValue) return;

    // Clear previous chips
    chipsWrapper.innerHTML = '';

    const chips = currentInputValue.split(' ').filter(Boolean);
    chips.forEach((chipValue) => {
        const chip = document.createElement('div');
        chip.textContent = chipValue;
        chip.classList.add('chip');
        chipsWrapper.append(chip);
    });

    // Reset textfield
    currentInputValue = '';
    textField.value = '';
};


function randomizeChoice() {
    const chips = document.querySelectorAll('.chip')
    const randomInt = (Math.floor(Math.random() * (chips.length)));

    if (!!chips.length && prevRandomNumbers?.length && prevRandomNumbers?.includes(randomInt)) {
        const div = document.createElement('div');
        div.textContent = 'Please enter new choise';
        div.classList.add('error-block');
        container.removeChild(container.lastChild);
        container.appendChild(div);
        return
    };

    if (!!chips.length) {
        chips[randomInt].style.backgroundColor = 'red';
    };

    prevRandomNumbers.push(randomInt);
};
