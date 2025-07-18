import { useState } from "react";
import "./css/App.css";
import {Navbar} from './components/Navbar.jsx'

import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import {Favorites} from "./pages/Favorites"
import { MovieProvider } from './contexts/MovieContext'; 
function App() {
  return (
    <MovieProvider> 
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}
export default App;
