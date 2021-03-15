import React from 'react';


const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.src}/>
            <h2>{props.textTitle}</h2>
            <p>{props.desc}</p>
            <div className='links'>
                <a href='#'>{props.link1}</a>
                <a href='#'>{props.link2}</a>
        </div>
        </div>
    );
};

export default Card;