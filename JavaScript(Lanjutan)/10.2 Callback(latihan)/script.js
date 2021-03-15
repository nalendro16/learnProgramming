$.ajax({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=627c3f22 &s=avenger",
  success: (results) => {
    const movies = results.Search;
    let cards = "";
    movies.forEach((m) => {
      cards += ` <div class="col-md-3 my-3">
        <div class="card">
          <img src="${m.Poster}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
            data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
          </div>
        </div>
      </div>`;
    });
    // Show All cards
    $(".movie-container").html(cards);
    // Detail onclick
    $(".modal-detail-button").on("click", function () {
      $.ajax({
        url: "http://www.omdbapi.com/?i=tt3896198&apikey=627c3f22",
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
