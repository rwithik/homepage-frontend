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
      document.getElementById('quote').innerHTML = response.data.quote.text;
    })
    .catch(function (error) {
      console.error(error);
    });
}

getQuote()

// document.getElementsByClassName('search-box')[0].addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//       query = document.getElementsByClassName('search-box')[0].value
//         url = "https://www.google.com/search?q=" + query;
//         console.log(url);
//         // window.open(url, "_self")
//         location.href = url;
//     }
// });

const search = () => {
  // if (e.which == 13){
  query = document.getElementsByClassName('search-box')[0].value
  url = "https://www.google.com/search?q=" + query;
  console.log(url);
  // window.open(url, "_self")
  location.href = url;
  // document.getElementsByClassName('search-box')[0].action = url;
// }
}
