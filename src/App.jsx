import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

import { movie_list } from "./data";

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  function handleAddToWatchList(newMovie){
    const isAdded = watchListMovies.some((m) => m.id === newMovie.id);
    if(!isAdded) {
      setWatchListMovies((prevMovies) => [...prevMovies, newMovie]);
    }
  }
  function handleRemoveFromWatchList(movieId) {
    setWatchListMovies((prevMovies) => prevMovies.filter((m) => m.id !== movieId));
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm />
        <WatchListButton movies={watchListMovies} onSetIsWatchListOpen={setIsWatchListOpen} />
      </Header>
      <Main>
        <WatchList watchListMovies={watchListMovies} isWatchListOpen={isWatchListOpen} onRemoveFromWatchList={handleRemoveFromWatchList}/>
        <MovieList movies={movies} onAddToWatchList={handleAddToWatchList}/>
      </Main>
      <Footer />
    </>
  );
}
