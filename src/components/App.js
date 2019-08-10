import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchField from './SearchField';
import MovieCard from './MovieCard';
import Button from './Button';

const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key="
const API_KEY = "057dfa32a18eed0f2dc23dc2e80ed8a0";

function App() {
  const [data, setData] = useState('');
  const [search, setSearch] = useState('')//hateful to find empty image
  const fetchData = async (search) => {
      console.log("fetch called", search);
      if(!search){ return alert("please enter a search value and try again")}
      const res = await fetch(MOVIE_DB_BASE_URL + API_KEY + "&query="+ search);
      const apiData = await res.json();
      setData(apiData);
    }
  // console.log(MOVIE_DB_BASE_URL + API_KEY + "hateful")
  console.log("Search:", search);
  return (
    <div className="">
      <NavBar />
      <SearchField
        setSearch={setSearch}
        search={search}
      />
      <Button
        fetchData={() => fetchData(search)}
        search={search}
       />
      {
        data ? data.results.map(movie => {
            return (
              <MovieCard
                key={movie.id}
                img={movie.backdrop_path}
                title={movie.title}
                votes={movie.vote_count}
                popularity={movie.votes_average}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            )
          }
        ) : null
      }
    </div>
  );
}

export default App;
