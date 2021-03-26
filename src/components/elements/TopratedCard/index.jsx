import React from 'react';
import {useHistory} from 'react-router-dom';
import './topratedcard.style.css'
import Ratings from "../Ratings";

const TopRatedCard = ({movie, emage}) => {
    // const [showInfo, setShowInfo] = useState(false)
    const history = useHistory()


    const handleClick = () => {
        // setShowInfo(true)
        history.push('/top-rated-single-detail',{...movie})

    }
    return (
        <div className={'tp-card'}>
            <div className={'tp-card_emage-div'} >
                <img onClick={handleClick} className={'emage'} src={`https://image.tmdb.org/t/p/w200/${emage}`} alt={movie.title}/>
            </div>
            <h5>{movie.title}</h5>
            <div>{movie.vote_average}</div>
            <div>
                <Ratings/>
            </div>
        </div>
    );
};

export default TopRatedCard;