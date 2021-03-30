import React, { useState, useEffect } from 'react';
import axios from 'axios';


function StarWars() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios.get('https://swapi.dev/api/films/');
            setData(result.data.results)
        })();
    }, [])

 return (
                <div>
                    {data.map(movie => <div key={movie.episode_id}>{`${movie.title} -> ${movie.director}`}</div>)}
                </div>
            );
    }



export default StarWars;