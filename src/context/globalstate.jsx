import React , {createContext, useEffect, useReducer} from 'react';
import {AppReducer}from "./AppReducer";

//initial state
const initialState = {
    watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    favorites:[],
    // favorites: localStorage.getItem("favorites")
    //     ? JSON.parse(localStorage.getItem("favorites"))
    //     : []
}



//creates context
export const GlobalContext = createContext(initialState)

export const  GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList))
    }, [state]);
    const addMovieToWatchlist = (movie) => {
        dispatch({type:"ADD_MOVIE_T0_WATCHLIST", payload:movie})
        console.log(movie)
    }
    const removeMovieFromWatchlist = (id) => {
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }
    return (
        <GlobalContext.Provider
             value={{
                 watchList: state.watchList,
                 favourites: state.favourites,
                 addMovieToWatchlist,
                 removeMovieFromWatchlist,

        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}