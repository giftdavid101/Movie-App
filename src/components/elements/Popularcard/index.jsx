import React from 'react';
import {useHistory} from 'react-router-dom';


const PopularCard = ({movie}) => {

    const history = useHistory();

    const handleClick = () => {
        console.log('clicked')
        history.push('/popular-movies', {...movie})
    }

    return (
        <div className={'popular-card'}>
            <div className={'popular-card_emage-div'} onClick={handleClick}>
                <img className={'emage'} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
            </div>
            <h5>{movie.title}</h5>

        </div>
    );
};

export default PopularCard;