import { useState } from "react";

const SerieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    getTmdbData(buildUrl());
  };

  const buildUrl = () => {
    const tmdbUrl = "https://api.themoviedb.org/3/search/tv";
    const apiKey = process.env.REACT_APP_TMBD_API_KEY;
    const language = "fr";
    const url = `${tmdbUrl}?api_key=${apiKey}&query=${searchQuery}&language=${language}`;

    return url;
  };

  const getTmdbData = async (url) => {
    const response = await fetch(url);

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }

    if (response.ok) {
      setSearchQuery("");
      setError(false);
      console.log("Séries trouvées", json);
    }
  };

  return (
    <div className="search__container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SerieSearch;
