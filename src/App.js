import React, { useState } from "react";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";

import ApiSource from "./api/ApiSource";
// import { ApiKey } from "./api/Api-info";

function App() {
  const [movieData, setMovieData] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await ApiSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "2c4f2885" },
    });

    setMovieData((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <div className="container movieSearchApp">
        <a class="navbar-link" href="/">
          <img
            className="nav--img"
            src="https://media1.giphy.com/media/TGKn4dC1ZD6EMwE21o/giphy.gif?cid=ecf05e47d6alx9hgf9i58vxx5fk5j9bz7ivplcs7i1obdqx8&rid=giphy.gif&ct=s"
            alt="search-img"
          />
        </a>
        <h2 className="title is-2 has-text-centered">Movie Searcer App</h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={movieData.results} />
      </div>
    </div>
  );
}

export default App;
