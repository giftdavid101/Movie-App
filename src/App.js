import React,{useState} from 'react'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import NavBar from "./components/compounds/Navbar";
import HomePage from "./pages/Homepage";
import Axios from "axios";


function App() {
    // const [movies,setMovies] = useState({})
    // const [query, setQuery] = useState('')
    //
    // const onChange = (e) => {
    //     e.preventDefault()
    //     setQuery(e.target.value)
    //     Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9b0813bc0da3a835bdb97c93e379d4d7&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((response) =>{
    //         const {data,status} = response
    //         if(status === 200){
    //             setMovies(data.results)
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // }
  return (
    <div className="App">
        <NavBar/>
     <Switch>
       <Route exact path={'/'} component={HomePage}/>
     </Switch>
    </div>
  );
}

export default App;
