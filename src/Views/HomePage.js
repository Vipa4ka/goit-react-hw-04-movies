import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import * as Api from "../Services/Api";
import styles from "./Views.module.css";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    Api.fetchPopularFilms()
      .then(({ results }) => {
        setFilms(results);
      })
      .catch((error) => console.log(error));
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
                <img
                  src={
                    film.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                      : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                  }
                  alt={film.title ?? film.name}
                  width="180px"
                  height="250px"
                />
                <p>{film.title ?? film.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
