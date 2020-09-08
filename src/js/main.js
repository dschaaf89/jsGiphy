import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

$(document).ready(function () {
  $("#search").click(function (event) {
    event.preventDefault();
    const search = $("#image").val();

    const url = `api.giphy.com/v1/gifs/search?api_key${apikey}&q=${search}`;
    
    let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          i = 0 ? getSearch(response) : i = 1 ? getTrending(response) : getRandom(response);
          ;
        }
      };
      request.open("GET", url, true);
      request.send();

      function getSearch(response) {
        let image;
        for (let i = 0; i < 16; i++) {
          let image = `<img src=${response.data[i].images.downsized_small.url}>`
          $("#image" + (i + 1)).html(image);
        }
      }
  });
  $("#trending").click(function (event) {
    event.preventDefault();

    const url = `api.giphy.com/v1/gifs/trending?api_key${apikey}`;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getTrending(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    
    function getTrending(response) {

    }
  });
  $("#random").click(function (event) {
    event.preventDefault();

    const url3 = `api.giphy.com/v1/gifs/random?api_key${apikey}`;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getRandom(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getRandom(response) {

    }
  });  
});









