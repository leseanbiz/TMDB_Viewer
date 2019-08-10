import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';
import SearchField from './SearchField';
import MovieCard from './MovieCard';
import Button from './Button';

// apiKey = "057dfa32a18eed0f2dc23dc2e80ed8a0";
// url = "https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key=" + apiKey + "&query=" + sear
// chString;
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key="
const API_KEY = "057dfa32a18eed0f2dc23dc2e80ed8a0";

function App() {
  const [data, setData] = useState('');
  const [search, setSearch] = useState('')//hateful to find empty image
  const fetchData = async (search) => {
      console.log("fetch called", search);
      const res = await fetch(MOVIE_DB_BASE_URL + API_KEY + "&query="+ search);
      const apiData = await res.json();
      setSearch('');
      setData(apiData);
      
    }
  // console.log(MOVIE_DB_BASE_URL + API_KEY + "hateful")
  console.log("Search:", search);
  return (
    <div className="App">
      <NavBar />
      <SearchField
        setSearch={setSearch}
        search={search}
      />
      <Button
        fetchData={fetchData}
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
