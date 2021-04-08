import React , {createContext, useEffect, useReducer} from 'react';
import {AppReducer}from "./AppReducer";

//initial state
const initialState = {
    watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    favorites:localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        :[],

     favoriteColor:""
    // favorites:[]
    // favorites: localStorage.getItem("favorites")
    //     ? JSON.parse(localStorage.getItem("favorites"))
    //     : []
}


//creates context
export const GlobalContext = createContext(initialState)

export const  GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log(state)

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList))
        localStorage.setItem("favorites", JSON.stringify(state.favorites))
    }, [state]);
    // useEffect(() => {
    //
    // },['red'])
    const addMovieToWatchlist = (movie) => {
        dispatch({type:"ADD_MOVIE_T0_WATCHLIST", payload:movie})
        console.log(movie)
    }
    const removeMovieFromWatchlist = (id) => {
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }
    const addMovieToFavorites = (movie) => {
        dispatch({type:"ADD_TO_FAVORITES", payload:movie})
        dispatch({type:"HANDLE_COLOR", payload:'red'})
    }
    const removeMovieFromFavorites = (id) => {
        dispatch({type:"REMOVE_MOVIE_FROM_FAVORITES", payload: id})

    }
    return (
        <GlobalContext.Provider
             value={{
                 watchList: state.watchList,
                 favorites: state.favorites,
                 addMovieToWatchlist,
                 removeMovieFromWatchlist,
                 addMovieToFavorites,
                 removeMovieFromFavorites,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}