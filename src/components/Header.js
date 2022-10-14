import React from 'react';
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header absolute top-0 left-0 w-full z-[9]">
        <div className="container m-auto px-[80px]">
          <nav className="navbar flex items-center justify-between">
            <div className='logo'>
                <Link to="/"><img src='/images/logo.png' className='img-fluid max-w-[200px]' alt='site logo'/></Link>
            </div>
            <div className="navbar-collapse" id="navbarNav">
              <ul className="navbar-nav relative ml-auto items-center flex">
                <li className='line m-[10px]'></li>
                <li className="nav-item p-[10px] uppercase">
                  <NavLink exact to="/" className="nav-link text-[#fdf252]">Starwar</NavLink>
                </li>
                <li className="nav-item p-[10px] uppercase">
                  <a href="#people" className="nav-link text-[#fdf252]">People</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
