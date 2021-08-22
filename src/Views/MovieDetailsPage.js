import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Link, Route, useRouteMatch } from "react-router-dom";
import * as Api from "../Services/Api";
import styles from "./Views.module.css";

const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [films, setFilm] = useState(null);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const { state } = useLocation();

  useEffect(() => {
    Api.fetchMovieInfo(filmId)
      .then(setFilm)
      .catch((error) => console.log(error));
  }, [filmId]);

  const onComeBack = () => {
    history.push(state.backUrl);
  };

  return (
    <>
      {films && (
        <>
          <button className={styles.button} onClick={onComeBack}>
            Go Back
          </button>
          <div className={styles.film}>
            <img
              className={styles.filmDetails}
              src={
                films.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w300/${films.poster_path}`
                  : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              }
              alt={films.title}
            />
            <div>
              <h1>{films.title}</h1>
              <p>User Score:{films.vote_average}</p>
              <p>Overview:{films.overview}</p>
              <h3>Genres</h3>
              <ul className={styles.filmsGenres}>
                {films.genres.map((film) => (
                  <li key={film.id}>{film.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `${url}/cast`,
                    state: {
                      backUrl: state.backUrl,
                    },
                  }}
                >
                  Сast
                </Link>
              </li>

              <li>
                <Link
                  to={{
                    pathname: `${url}/reviews`,
                    state: {
                      backUrl: state.backUrl,
                    },
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Route path={`${path}/cast`} exact>
              <Cast />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
