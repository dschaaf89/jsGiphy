import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

$(document).ready(function () {
  $("#").submit(function (event) {
    event.preventDefault();
    const search = $("#").val();

    const url = `api.giphy.com/v1/gifs/search?api_key${apikey}&q=${search}`;
    const url2 = `api.giphy.com/v1/gifs/trending?api_key${apikey}`;
    const url3 = `api.giphy.com/v1/gifs/random?api_key${apikey}`;

    const array = [url, url2, url3];

    let request = new XMLHttpRequest();

    for (let i = 0; i < array.length; i++) {
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          i = 0 ? getSearch(response) : i = 1 ? getTrending(response) : getRandom(response);
          ;
        }
      };
      request.open("GET", array[i], true);
      request.send();
    }

    function getSearch(response) {
      for (let )
    }

    function getTrending(response) {

    }

    function getRandom(response) {

    }
  })
});









