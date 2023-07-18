import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export function Header () {
  const [, setPosition] = useLocalStorage('position', 0)

  const [searchPoke, setSearchPoke] = useState()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    setSearchPoke(value.toLowerCase())
  }

  const handleBack = () => {
    navigate('/Pokedex/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchPoke('')
    navigate(`/Pokedex/pokemon/${searchPoke}`)
    setPosition(0)
  }

  return (
    <nav className='Header'>
      <h1 onClick={handleBack} className='HeaderTitle'>Pokedex</h1>
      <form onSubmit={handleSubmit} className='HeaderSearchContainer'>
        <input onChange={handleChange} type='text' placeholder='Escribe el nombre de tú pokemón' className='Search' value={searchPoke}/>
        <button className='btnSearch'>Search</button>
      </form>
    </nav>
  )
}
