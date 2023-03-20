import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {

    const navLinks = document.querySelector(`.nav-links`);
    const [navStatus, setNav] = useState(false);
    console.log(navStatus)

    function navToggle() {
        setNav(!navStatus)
    }
    
  return (
    <header>
        {/*DESKTOP HEADER*/}
            {/*HEADER*/}
            <Link style={{textDecoration: 'none'}} 
                to={'/*'}
                className="logo">
                <img src={Logo} alt="" />
            </Link>

            {/*LINKS CENTER*/}
            <ul className={`nav-links  ${navStatus == true ? "active-nav" : ""}`}>
                <li>
                    <div className='nav-drop'>
                        <Link className='header-link' 
                            to={'/*'} style={{textDecoration: 'none'}}>
                            <p>Home</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='nav-drop'>
                        <p className='header-link' >Vision</p>
                        <div className='nav-drop-content'>
                            <Link to={'/Aboutus'} style={{textDecoration: 'none', color: 'black'}}><p>About Seedwells</p></Link>
                            <Link to={'/Seedwells-board'} style={{textDecoration: 'none', color: 'black'}}><p>Seedwells Board</p></Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='nav-drop'>
                        <p className='header-link'>Updates</p>
                        <div className='nav-drop-content'>
                            <Link to={'/Blogs'} style={{textDecoration: 'none', color: 'black'}}><p>Blogs & Updates</p></Link>
                            <Link to={'/Pressreleases'} style={{textDecoration: 'none', color: 'black'}}><p>Press Releases</p></Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='nav-drop'>
                        <p className='header-link'>Resources</p>
                        <div className='nav-drop-content'>
                            <Link to={'/Publications'} style={{textDecoration: 'none', color: 'black'}}><p>Publications</p></Link>
                            <Link to={'/Vacancies'} style={{textDecoration: 'none', color: 'black'}}><p>Vacancies</p></Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='nav-drop'>
                        <Link
                            className='header-link' 
                            to={'/Contactus'} style={{textDecoration: 'none'}}>
                            <p>Contact Us</p>
                        </Link>
                    </div>
                </li>
            </ul>


            {/*BURGER MENU*/}
            <div
                onClick={navToggle}
                className='burger-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
    </header>
  )
}
