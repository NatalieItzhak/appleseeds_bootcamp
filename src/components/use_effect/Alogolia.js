import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Alogolia = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('hooks');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(false);


    const fetchApi = () => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);
                setData(data.hits);
                setLoading(false)
            } catch (error) {
                setError(true);
            }
        })();
    };

    useEffect(() => {
        fetchApi()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const Showalo = () => {
            return (
                <ul>
                    {data.map(result => <li key={result.objectID}><a href={result.url}>{result.title}</a></li>)}
                </ul>
            )
       
    }

 return (
        <div>
            {!loading && !error && (
                <div>
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button onClick={fetchApi}>search</button>
                    <Showalo />
                </div>
            )}

            {loading && !error && (
                <div>loading</div>
            )}

            {loading && error && (
                <div>error</div>
            )}
        </div>
    )
}

export default Alogolia;