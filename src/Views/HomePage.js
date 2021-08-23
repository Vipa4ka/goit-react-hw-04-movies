import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import * as Api from "../Services/Api";
import styles from "./Views.module.css";
import avatar from "./avatar.png";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    Api.fetchPopularFilms().then((data) => setFilms(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {films && (
        <ul className={styles.homePage}>
          {films.map((film) => (
            <li className={styles.homePageFilms} key={film.id}>
              <Link
                to={{
                  pathname: `Movies/${film.id}`,
                  state: {
                    backUrl: pathname,
                  },
                }}
              >
                {film.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.title ?? film.name}
                  />
                ) : (
                  <img src={avatar} alt={film.title ?? film.name} />
                )}
                <p>{film.title ?? film.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
