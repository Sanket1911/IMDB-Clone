/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex space-x-8 px-8 border items-center py-4 cursor-pointer'>

        <img src={logo} className="w-[50px] lg:w-[75px]"></img>

        <Link to="/">
            <div className='text-blue-400 font-bold text-xl
            lg:text-4xl'>Movies</div>
        </Link>
        
        <Link to="/favorites">
            <div className='text-blue-400 font-bold text-xl
            lg:text-4xl'>Favorites</div>
        </Link>
        
    </div>
  )
}

export default Navbar