export const  AppReducer = (state, action) => {
    switch (action.type) {
            case "ADD_MOVIE_T0_WATCHLIST":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList]
            };
            case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter((el) => el.id !== action.payload),

            }


          default:
            return state;
    }
}
