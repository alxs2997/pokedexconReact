import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Header } from './Components/Header/Header'
import { Details } from './Pages/Details/Details'
import { Page404 } from './Pages/Page404/Page404'

export default function App () {
  return (
    <>
    <div className='appContainer'>

      <Router>
      <Header/>
        <Routes>
          <Route path="/Pokedex" element={<Home />} />
          <Route path="/Pokedex/pokemon/:id" element={<Details />} />
          <Route path="/Pokedex/*" element={<Page404/>} />
        </Routes>
      </Router>
    </div>

    </>
  )
}
