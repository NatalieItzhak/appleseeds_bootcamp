import React, { useState } from 'react';
import GetAQuote from './GetAQuote';

const CancelRequest = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide Quote' : 'Show Quote'}</button>
            {toggle ? <GetAQuote /> : null}
        </>
    )
}

export default CancelRequest;
