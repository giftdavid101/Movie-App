import React,{useContext} from 'react';
import {GlobalContext} from "../../../context/globalstate";

const BtnControls = ({type,movie}) => {
    const {removeMovieFromWatchlist} = useContext(GlobalContext)
    console.log(removeMovieFromWatchlist)

    return (
        <div>
            {/*{type === "watchlist" && (*/}
                <>
                    <button
                        style={{padding: "5px", background: "pink"}}
                    >
                        Favorites
                    </button>

                    <button
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                        style={{padding: "5px", background: "orange"}}
                    >
                        Remove
                    </button>

                </>
                 {/*) }*/}

        </div>
    );
};

export default BtnControls;