const icon = document.querySelector('.search-wrapper__icon');
const input = document.querySelector('.search-wrapper__input');

icon.addEventListener('click', () => {
    input.classList.toggle('active')

    //Option2
    // if (input.classList.contains('active')) {
    //     input.classList.remove('active')
    // } else {
    //     input.classList.add('active')
    // }
})