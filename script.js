const apiKey = "06c51150c0b1101d7a136e0f45c2396c";
const getFilmsUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=null";
const imageUrl = "https://image.tmdb.org/t/p/w500";

let filmList = [];

window.onload = function () {
  getFilms();
};

function getFilms() {
  fetch(getFilmsUrl)
    .then((response) => response.json())
    .then((films) => (filmList = films))
    .finally(() => {
      let filmContainer = "";
      for (let i = 0; i < filmList.results.length; i++) {
        let filmCard = `
                    <div
                        class="featured-content"
                        style="
                                background-size: cover;
                                background-repeat: no-repeat;
                              "
                    >
                        <img
                            class="featured-title"
                            src="${
                              imageUrl + filmList.results[i].backdrop_path
                            }"
                            alt="img"
                        />
                        <p class="featured-desc">
                            ${filmList.results[i].overview}
                        </p>
                        <button class="featured-button">PLAY</button>
                    </div>
                `;
        filmContainer = filmContainer.concat(filmCard);
        document.getElementById("filmContainer").innerHTML = filmContainer;
      }
    });
}
