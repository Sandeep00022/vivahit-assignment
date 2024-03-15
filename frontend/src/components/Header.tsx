import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex bg-purple-500 font-bold hover:cursor-pointer text-white p-3 gap-7 justify-center items-center border-b-2'>
        <Link to="/">
        <div >Home</div>
        </Link>
         <Link to="gallery">
         <div>Gallery</div>
         </Link>
      
    </div>
  )
}

export default Header