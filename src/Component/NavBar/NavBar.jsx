import React from 'react'

// import {FaMoon} from 'react-icons/fa'
import './NavBar.css'

function NavBar({handlechangemode, icon, mode, navbody}) {
  return (
    <nav className={navbody}>
        <div className='where'>Where in the world?</div>

        <div className="changemode">     
            <div className='icon' onClick={handlechangemode}>{icon}</div>
            <div className='mode'>{mode}</div>
        </div>
    </nav>
  )
}

export default NavBar