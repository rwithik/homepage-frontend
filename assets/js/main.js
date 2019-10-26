// API_ROOT = 'http://localhost:3000/'
API_ROOT = 'https://evening-river-46814.herokuapp.com/'
// const search_box = ;


const getQuote = () => {
  axios.get(API_ROOT + 'quote',{
    headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(function (response) {
      console.log(response);
      document.getElementById('quote').innerHTML = response.data.quote.fulltext;
    })
    .catch(function (error) {
      console.error(error);
    });
}

getQuote()
