import React,{useContext,useState} from 'react';
import {useHistory} from 'react-router-dom';
import './topratedcard.style.css'
import Ratings from "../Ratings";
import {AiFillHeart} from "react-icons/all";
import {GlobalContext} from "../../../context/globalstate";

const TopRatedCard = ({movie, emage}) => {
    const {addMovieToFavorites} = useContext(GlobalContext)
    const {favoriteColor} = useContext(GlobalContext)
    const {favorites} = useContext(GlobalContext)
    let storedMovie = favorites.find((el) => el.id === movie.id)
    const favoritesDisabled = !!storedMovie;
    const [color, setColor] = useState('')
    const handleColor = () => {
        setColor('red')
    }

    const handleAddFavourites = ()=>{
        const ans = favorites.findIndex((el)=>
            el.id === movie.id
        )
        if(ans < 0){
            // it not in
            return ans

        }
        console.log(ans)

        addMovieToFavorites(movie)
    }
    const history = useHistory()
    const handleClick = () => {
        // setShowInfo(true)
        history.push('/top-rated-single-detail', {...movie})

    }
    return (
        <div className={'tp-card'}>
            <div className={'tp-card_emage-div'}>
                <img onClick={handleClick} className={'emage'} src={`https://image.tmdb.org/t/p/w200/${emage}`}
                     alt={movie.title}/>
            </div>

            <div className={'dtails'} >

                <div>
                    <h5>{movie.title}</h5>
                    {movie.vote_average}
                    <Ratings/>
                </div>
                <button disabled={favoritesDisabled} className={'heart-btn'}
                        onClick={handleAddFavourites}
                >
                    <AiFillHeart
                        role={'button'}
                        // onClick={handleColor}
                        className={`heart ${favorites.findIndex((el)=>
                            el.id === movie.id
                        )? 'heart--active':''}`}
                        // style={{color:favoriteColor}}
                       // onClick={() => favoriteColor()}
                    />
                </button>
            </div>


        </div>
    );
};

export default TopRatedCard;