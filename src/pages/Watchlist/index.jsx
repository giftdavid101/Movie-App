import React, {useContext} from 'react';
import {GlobalContext} from "../../context/globalstate";


const Watchlist = () => {
    const {watchList} = useContext(GlobalContext)
    const {removeMovieFromWatchlist} = useContext(GlobalContext)
    console.log(watchList)
    return (
        <div className={'container'}>
            <h1>WatchList</h1>
            <div className={'grid-style'}>
                {watchList.map((movie) => (
                    <div key={movie.id}>
                        <h5>{movie.title}</h5>
                        <div className={'mini-emage-div'}>
                            <img className={'single-emage'} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
                        </div>
                        <button
                            onClick={() => removeMovieFromWatchlist(movie.id)}
                            style={{padding: "5px", background: "orange"}}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Watchlist;