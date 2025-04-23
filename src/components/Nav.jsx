import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='top-0 bg-gray-800 left-0 absolute w-screen  '>
      {/* <NavLink to='/'>Home</NavLink>
      <NavLink to='/pastes'>Pastes</NavLink> */}
      <nav className="bg-gray-800 p-4  w-full   ">
      <div className="flex space-x-4 justify-center">
        <NavLink to='/' className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
          Home
        </NavLink>
        <NavLink to='/pastes' className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
          Pastes
        </NavLink>
      </div>
    </nav>
    </div>
  )
}

export default Nav