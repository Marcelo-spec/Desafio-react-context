import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"
import Context from './context/Context'
import { useState } from 'react'

export default function App () {
  const [favorites, setFavorites] = useState( [] )
  const favoriteState = { favorites, setFavorites }




  return (
    <div className="App">
      <Context.Provider value={ favoriteState }>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Favoritos" element={ <Favoritos /> } />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
