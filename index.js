function saveToWatchlist(imdbID){
    var movies=movieData.find(function(currentMovie){

        return currentMovie.imdbID;
    });



    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    if(watchlist==null){
        watchlist=[];

    }
    watchlist.push(movies);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);

}


document.addEventListener('DOMContentLoaded', function() {

    
    
    var content = document.getElementsByClassName('movies-container')[0];
    function renderMovies(movieArray){

        var movieHTML=movieArray.map(function(currentMovie){
         return `
            <div class="card movie" style="width: 18rem;">
                <img src="${currentMovie.Poster}" alt="Card image cap" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="release-date">${currentMovie.Year}</p>
                    <button class="add-button" class="btn btn-primary" onclick='saveToWatchlist("${currentMovie.imdbID}")'>Add</button>
                </div>
            </div>
            `
        })

        return movieHTML.join('');
    }


    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        
        var searchString = document.getElementsByClassName('search-bar')[0].value;
        // var searchString='superman';

        console.log(searchString);

        var urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get( "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response){
            content.innerHTML=renderMovies(response.data.Search);
            console.log(urlEncodedSearchString);
        
        });
        
        
        
    })


    
});
