import axios from 'axios';
import React, { useState, useEffect } from 'react';

const GetAQuote = () => {
    const [Quote, setQuote] = useState('');

    useEffect(() => {
        let cancel;

        (async () => {
            try {
                const { data } = await axios.get('https://api.quotable.io/random', {
                    cancelToken: new axios.CancelToken(function executor(c) {
                       
                         cancel = c;
                    })
                });
                setQuote(data.content)
            } catch (err) {
                console.log(err);
            }
        })();

        return (() => {
            cancel();
        })
        
    }, [])

    return (
        <div>
            {Quote}
        </div>
    )
}

export default GetAQuote;