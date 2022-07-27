import "./Navbar.css"
import React from 'react'

function Navbar() {
  const nav = (navId) => {
    const targets = document.getElementsByClassName('underline')
    for(let i=0; i<=2; i++) {
      console.log(targets[i])
      targets[i].style.display = 'none'
    }
    document.getElementById(navId).style.display = 'block'
  }

  return (
    <div id="navbar">
      <div className="logo">
        <h3>Nadir Karimov</h3>
      </div>

      <div className="options">
        <div className="option">
          <a href="#about" onClick={(event) => nav('underline1')}>About Me</a>
          <div id="underline1" className="underline"></div>
        </div>

        <div className="option">
          <a href="#skills" onClick={(event) => nav('underline2')}>Skills</a>
          <div id="underline2" className="underline"></div>
        </div>

        <div className="option">
          <a href="#projects" onClick={(event) => nav('underline3')}>Projects</a>
          <div id="underline3" className="underline"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar