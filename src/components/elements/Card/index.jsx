import React,{useContext} from 'react';
import './card.style.css'
import {GlobalContext} from "../../../context/globalstate";
import Button from "../Button";

const Card = ({children,movie}) => {
    const {addMovieToWatchlist,watchlist,} = useContext(GlobalContext);



    return (
        <div className={'card'} >
            {children}
            {/*<Button onclick={addMovieToWatchlist()}/>*/}
        </div>
    );
};

export default Card;