import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {


  const { id } = useParams();
  const [load,setLoad] = useState(true);
  const [movie,setMovie] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoad(false);
  };


  useEffect(() => {
    getMovie();
  }, []);


  return (
    <>
    { load ? <h1>Loading...</h1> : <div>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <h2><a href={movie.url}>{movie.title}</a></h2>
        <p>{movie.description_full}</p>
        </div> }
    </>
  )
}


export default Detail;