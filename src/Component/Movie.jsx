import React from 'react';
import { useParams } from 'react-router-dom';


function Movie( { coverimg, title, summary, genres }) {

    const ids = useParams();
    console.log(ids)

    return(
        <>
        <div >
            <img src={coverimg} alt = {title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Movie();