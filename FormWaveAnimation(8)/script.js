//email
const emailInputPlaceholder = document.querySelector('.email-input__placeholder');
const emailInput = document.getElementById('email-input-element');

//password
const passwordInputPlaceholder = document.querySelector('.password-input__placeholder');
const passwordInput = document.getElementById('password-input-element');


function animatePlaceholder(event) {
    const isBlur = event.type === 'blur';
    const focusedInputPlaceholder = event.target.type === 'email' ? emailInputPlaceholder : passwordInputPlaceholder;
    const spansToAnimate = [...focusedInputPlaceholder.children];
    const transformValue = isBlur ? '30px' : '0px';

    spansToAnimate.forEach((span, idx) => {
        span.style.transitionDelay = `${idx * 0.15}s`;
        span.style.transform = `translate(10px, ${transformValue})`;
    });
};

emailInput.addEventListener('focus', animatePlaceholder);
emailInput.addEventListener('blur', animatePlaceholder);

passwordInput.addEventListener('focus', animatePlaceholder);
passwordInput.addEventListener('blur', animatePlaceholder);

