import React from 'react';
import {useContext} from 'react'
import {GlobalContext} from "../../../context/globalstate";
import {RiHeartAddFill} from "react-icons/all";

const WFCard = ({movie}) => {
    console.log(movie)
    const {addMovieToWatchlist, watchList} = useContext(GlobalContext);
    let storedMovie = watchList.find((el) => el.id === movie.id)
    const watchedDisabled = !!storedMovie;

    return (
        <div>
            {/*{children}*/}
            <div className={'single-emage-div'}>
                <img className={'single-emage'} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                     alt={movie.title}/>
            </div>
            {/*<TopRatedCard/>*/}
            {/*<Button/>*/}
            <button

                onClick={() => addMovieToWatchlist(movie)}
                disabled={watchedDisabled}
                style={{
                    width: '300px',
                    border: '20px',
                    padding: '20px',
                    background: 'gold',
                    fontSize: '25px'
                }}
                className={'btn_btn-tag'}
            > Add to Watchlist <RiHeartAddFill/></button>

        </div>
    );


};

export default WFCard;