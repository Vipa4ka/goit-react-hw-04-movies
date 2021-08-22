import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../Services/Api";
import styles from "./Views.module.css";
import avatar from "./avatar.png";

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
                src={
                  Cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${Cast.profile_path}`
                    : avatar
                }
                alt={Cast.name}
                width="250px"
                height="375px"
              />
              <p>{`Character: ${Cast.character}`}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
