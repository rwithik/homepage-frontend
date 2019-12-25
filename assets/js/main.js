// API_ROOT = 'http://localhost:3000/'
const API_ROOT = "https://evening-river-46814.herokuapp.com/";
const GITHUB_USERNAME = "rwithik";

const getQuote = () => {
  axios
    .get(API_ROOT + "quote", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
      console.log(response);
      document.getElementById("quote").innerHTML = response.data.quote.fulltext;
    })
    .catch(function(error) {
      console.error(error);
    });
};

getQuote();

document
  .querySelector(".input-div.gh-pages-div>form")
  .addEventListener("submit", e => {
    e.preventDefault();
    document.location = `https://${GITHUB_USERNAME}.github.io/${e.target[0].value}`;
  });

document
  .querySelector(".input-div.gh-repo-div>form")
  .addEventListener("submit", e => {
    e.preventDefault();
    let repo = e.target[0].value;
    if (repo.indexOf("/") == -1) {
      document.location = `https://github.com/${GITHUB_USERNAME}/${repo}`;
    } else {
      document.location = `https://github.com/${repo}`;
    }
  });
