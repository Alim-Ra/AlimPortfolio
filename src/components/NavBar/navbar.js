/*navbar.js
Alim Rashyani
301497158
28 January 2025*/

import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeclass='active' to='welcome' spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-62} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeclass='active' to='works' spy={true} smooth={true} offset={-54} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">Services</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar;
