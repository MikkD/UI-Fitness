
const bgImage = document.querySelector('.bg-img');
const loader = document.querySelector('.loader');

let intervalId;
let counter = 0;
let blurValue = 100;

function startLoader() {
    const isLoaderInProgress = counter < 100 && blurValue > 0;
    console.log('counter', counter);
    console.log('blurValue', blurValue);

    if (isLoaderInProgress) {
        counter++
        blurValue--
    };

    bgImage.style.filter = `blur(${blurValue}px)`
    loader.innerText = `${counter}%`

    if (!isLoaderInProgress) {
        clearInterval(intervalId);
        loader.classList.add('inactive');
    }
};


intervalId = setInterval(startLoader, 10);





