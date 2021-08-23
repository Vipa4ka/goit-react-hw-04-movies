import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import qs from "query-string";
import styles from "./Views.module.css";
import * as Api from "../Services/Api";
import avatar from "./avatar.png";

export default function MoviesPage() {
  const [searchs, setSearch] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const query = qs.parse(location.search)?.query || "";

  const changeInput = (e) => {
    e.preventDefault();
    if (e.target.elements.searching.value.trim() === "") {
      return alert("Enter a value to search.");
    }
    history.push({
      ...location,
      search: `query=${e.target.elements.searching.value}`,
    });
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    Api.fetchMovieSearch(query)
      .then(({ results }) => {
        setSearch(results);
      })
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <div>
      <form onSubmit={changeInput}>
        <input
          className={styles.moviesInput}
          type="text"
          placeholder="Search movies"
          name="searching"
        />
        <button type="submit">Search</button>
      </form>
      {searchs && (
        <ul className={styles.moviesPage}>
          {searchs.map(({ id, title, name, poster_path }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: {
                    backUrl: location,
                  },
                }}
              >
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : avatar
                  }
                  alt={title ?? name}
                  width="220px"
                  height="350px"
                />
                <p className={styles.title}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
