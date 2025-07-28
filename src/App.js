import { BrowserRouter , Route , Routes } from "react-router-dom";

import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./components/Home";
import Animal from "./components/Animal.js";
import Gk from "./components/Gk/index.js";
import History from "./components/History/index.js";
import Mathematics from "./components/Mathematics/index.js";
import Physics from "./components/Physics/index.js";
import Music from "./components/Music/index.js";
import Movies from "./components/Movies/index.js";
import Planets from "./components/Planets/index.js";
import Science from "./components/Science/index.js";
import Sports from "./components/Sports/index.js";

import './App.css'

class App extends Component{
  render(){
    return(
     <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/animals" element={<Animal/>}/>
          <Route exact path="/gk" element={<Gk/>}/>
          <Route exact path="/history" element={<History/>}/>
          <Route exact path="/mathematics" element={<Mathematics/>}/> 
          <Route exact path="/Music" element={<Music/>}/> 
          <Route exact path="/movies" element={<Movies/>}/> 
          <Route exact path="/physics" element={<Physics/>}/> 
          <Route exact path="/planets" element={<Planets/>}/> 
          <Route exact path="/science" element={<Science/>}/> 
          <Route exact path="/sports" element={<Sports/>}/> 
        </Routes>
      </BrowserRouter>
     </>
    )
  }
}
export default App