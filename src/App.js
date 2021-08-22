import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar";
import styles from "./Views/Views.module.css";

const HomePage = lazy(() => import("./Views/HomePage"));
const MoviesPage = lazy(() => import("./Views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./Views/MovieDetailsPage"));
const NotFoundView = lazy(() => import("./Views/NotFoundView"));

function App() {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:filmId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
