import React , {createContext, useEffect, useReducer} from 'react';
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    nowPlaying:[],
    topRated: [],
    watchlist:[]

}


//creates context
export const GlobalContext = createContext(initialState)

export const  GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    const addMovieToWatchlist = (movie) => {
        dispatch({type:"ADD_T0_WATCHLIST", payload:movie})

    }
    return (
        <GlobalContext.Provider
             value={{
                  watchlist:state.watchlist,
                  nowPlaying: state.nowPlaying,
                  topRated: state.topRated,
                  addMovieToWatchlist:addMovieToWatchlist
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}