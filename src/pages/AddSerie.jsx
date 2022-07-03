import { useState } from "react";

import Input from "../components/Input";

const SerieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tmdbData, setTmdbData] = useState({});
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
      setTmdbData(json);
      setError(false);
      console.log("Série(s) trouvée(s)", json);
    }
  };

  return (
    <main>
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

      <section>
        <form>
          {tmdbData.results &&
            tmdbData.results.map((serie) => (
              <Input key={serie.id} infos={serie} />
            ))}
        </form>
      </section>
    </main>
  );
};

export default SerieSearch;
