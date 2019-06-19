var watchlistJSON = localStorage.getItem("watchlist");
var watchlist = JSON.parse(watchlistJSON);

function renderMovies(list) {
  console.log("hello world!");
  movieHTML = list.map(currentMovie => {
    return `<div class="mr-3 movie">
    <div class="card h-100" style="width: 18rem;">
      <img
        class="card-img-top"
        src=${currentMovie.Poster}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text">
          ${currentMovie.Year}
        </p>
        <button class='btn btn-primary' onclick='saveToWatchlist("${
          currentMovie.imdbID
        }")'>Add</button>
      </div>
    </div>
  </div>`;
  });
  return movieHTML.join("");
}
var container = document.querySelector(".watchlist-container");
container.innerHTML = renderMovies(watchlist);