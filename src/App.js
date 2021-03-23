import React from 'react'
import './App.css';
import {Route,Switch} from 'react-router-dom'
import NavBar from "./components/compounds/Navbar";
import HomePage from "./pages/Homepage";


function App() {
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
