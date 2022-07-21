import React from 'react';
import { useState, useEffect } from 'react';
import Movie from '../Component/Movie';


function Home() {
    

    const [load, setLoad] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovies = async() => {

        const json = await(
            await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rate=9.0&sort_by=rate")).json())
            setMovie(json.data.movies);
            setLoad(false);
    }

    useEffect( () => {
        getMovies();
    })


  
  
  return (
    <div className="App">
        {load ? <h1>Loading....</h1> : (<div>
            {movie.map((movie) => (
                <Movie 
                key={movie.id}
                coverimg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres} />
            ))}</div>)}
    </div>
  );
}

export default React.memo(Home);