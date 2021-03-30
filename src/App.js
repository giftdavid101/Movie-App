import React from 'react'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import NavBar from "./components/compounds/Navbar";
import HomePage from "./pages/Homepage";
import TopRatedSingle from "./components/compounds/TopRatedSingleDetail";
import {GlobalProvider} from "./context/globalstate";
import PopularSingle from "./components/compounds/PopularMoviesSingleDetails";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <GlobalProvider>
    <div className="App">
        <NavBar/>
     <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/top-rated-single-detail'} component={TopRatedSingle}/>
        <Route exact path={'/popular-movies'} component={PopularSingle}/>
        <Route exact path={'/watchlist'} component={Watchlist}/>

     </Switch>
    </div>
    </GlobalProvider>
  );
}

export default App;
