import React from 'react'
import logo from "../../img/logo4.png"
import "../styles/Logo.css"
function Logo() {
  return (
    <div className='Logo'>
        <img src={logo} alt="logo" width={75} height={75}/>
    </div>
  )
}

export default Logo