import React from 'react'
import './NotFound.css'
import NotFound from '../../Img/NotFound.png'
import { useNavigate } from 'react-router-dom'

export function PokemonNFound () {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/Pokedex/')
  }
  return (
    <>
    <div className='NotFoundContainer'>
      <div className='NotFound'>
        <p className='NotFoundTitle'>Pokemon Not Found</p>
        <img className='NotFoundImg' src={NotFound} alt='Not Found' />
      </div>
      <button className='btnHome' onClick={handleHome}>Go to Home</button>
    </div>
    </>
  )
}
