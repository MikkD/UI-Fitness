
// DOCS => https://icanhazdadjoke.com/api#authentication 
// https://icanhazdadjoke.com/  => fetch a random dad joke. // GET 

// https://icanhazdadjoke.com/search  => search for dad jokes.  // GET
// This endpoint accepts the following optional query string parameters:
// page - which page of results to fetch (default: 1)
// limit - number of results to return per page (default: 20) (max: 30)
// term - search term to use (default: list all jokes)

const cardText = document.querySelector('.card_text');
const cardBtn = document.querySelector('.card_btn');
const endpoint = 'https://icanhazdadjoke.com/';

const fetchNewJoke = () => {
    const params = {
        headers: {
            Accept: "application/json",
        }
    };

    fetch(endpoint, params)
        .then(data => data.json())
        .then(({ joke }) => cardText.innerText = joke);
};

cardBtn.addEventListener('click', fetchNewJoke);







