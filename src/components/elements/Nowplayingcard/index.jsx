import React from 'react';
import './nowplaying.style.css'

const NowPlayingCard = ({movie}) => {

    return (
        <div className={'np-card'}>
            <div onClick={''} className={'card_emage-div'}>
                <img className={'emage'} src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`} alt={movie.title}/>
            </div>
            <h5>{movie.title}</h5>

        </div>
    );
};

export default NowPlayingCard;