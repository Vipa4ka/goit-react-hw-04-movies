import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Views.module.css";
import * as Api from "../Services/Api";

export default function Reviews() {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    Api.fetchRequestForMovie(filmId).then(setReviews);
  }, [filmId]);

  return (
    <>
      {reviews &&
        (reviews.results.length > 0 ? (
          <ul>
            {reviews.results.map((review) => (
              <li key={`${review.id}`}>
                <h3>{`${review.author}`}</h3>
                <p>{`${review.content}`}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        ))}
    </>
  );
}
