import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        (async () => {
            const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
            setCountries(data.map(country => country.name));
        })();
    }, []);

    const ShowCountBySearch = () => {
            return (
                countries
                    .filter(country => country.toLowerCase().startsWith(search.toLowerCase()))
                    .map(country => <li>{country}</li>)
            )
    }

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <ul>
                {ShowCountBySearch()}
            </ul>
        </div>
    )
}


export default Countries;