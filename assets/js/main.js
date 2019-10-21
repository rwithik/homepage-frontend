// API_ROOT = 'http://localhost:3000/'
API_ROOT = 'https://evening-river-46814.herokuapp.com/'

const getQuote = () => {
  axios.get(API_ROOT + 'quote',{
    headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(function (response) {
      console.log(response);
      document.getElementById('quote').innerHTML = response.data.quote.text;
    })
    .catch(function (error) {
      console.error(error);
    });
}

getQuote()