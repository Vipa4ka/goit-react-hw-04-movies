import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../Services/Api";
import styles from "./Views.module.css";

export default function Cast() {
  const { filmId } = useParams();
  const [Casts, setCasts] = useState(null);

  useEffect(() => {
    Api.fetchСast(filmId).then(setCasts);
  }, [filmId]);

  return (
    <>
      {Casts && (
        <ul className={styles.cast}>
          {Casts.cast.map((Cast) => (
            <li key={`${Cast.id}`}>
              <p>{`${Cast.name}`}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200/${Cast.profile_path}`}
                alt={Cast.name}
                width="250px"
              />
              <p>{`Character: ${Cast.character}`}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
