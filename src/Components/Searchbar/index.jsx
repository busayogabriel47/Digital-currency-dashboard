import React from 'react'
import "./style.css"

const Searchbar = () => {
  return (
    <>
        <input type="text" class="search-bar__input" placeholder="Search..."/>
        <svg class="search-bar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 2a8 8 0 106.32 3.16l4.5 4.5-1.42 1.42-4.5-4.5A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
    </>
  )
}

export default Searchbar