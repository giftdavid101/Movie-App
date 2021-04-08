import React,{useContext} from 'react';
import {GlobalContext} from "../../context/globalstate";

const Favorites = () => {
   const {favorites} = useContext(GlobalContext)
    const {removeMovieFromFavorites} = useContext(GlobalContext)
    console.log(favorites)


    return (
        <div className={'container'}>
            <h1>My Favorite Movies</h1>
            <div className={'grid-style'}>

                {
                    favorites.map((el) => (
                        <div key={el.id}>
                           <h5>{el?.title}</h5>
                            <div className={'mini-emage-div'}>
                                <img className={'single-emage'} src={`https://image.tmdb.org/t/p/w200/${el?.poster_path}`} alt={el?.title}/>
                            </div>
                            <button

                                onClick={() => removeMovieFromFavorites(el.id)}
                                style={{padding: "5px", background: "orange"}}

                            >
                                Remove
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorites;