import React from 'react';
import './card.style.css'

const Card = ({movies}) => {
    return (
        <div className={'card'}>
            <div className={'card_emage-div'}>
                <img src={`https://image.tmdb.org/t/p/w200/${ movies && movies.poster_path}`} alt={`${movies && movies.title} Poster`}/>
            </div>
        </div>
    );
};

export default Card;