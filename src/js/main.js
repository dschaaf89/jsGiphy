import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';


$(document).ready(function () {
  $("#search").click(function(event) {
    event.preventDefault();
    const search = $("#image").val();
    $("#image").val("");

    let request = new XMLHttpRequest();

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getSearch(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getSearch(response) {
      let image;
      
      for (let i = 0; i < 16; i++) {
        image = `<img src=${response.data[i].images.downsized_medium.url}>`;
        $("#image" + (i + 1)).html(image);
      }
    }
  });
  $("#trending").click(function(event) {
    event.preventDefault();

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}`;

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
      let image;
      for (let i = 0; i < 16; i++) {
        image = `<img src=${response.data[i].images.downsized_medium.url}>`;
        $("#image" + (i + 1)).html(image);
      }
    }
  });
  $("#random").click(function(event) {
    event.preventDefault();

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`;

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
      let image = `<img src=${response.data.images.downsized_medium.url}>`;
      $("#image1").html(image);
    }
  });
});









