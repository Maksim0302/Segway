import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';
import { FiPhone } from "react-icons/fi";
import logo from "../../images/logo.png";
import './Header.scss';
import Home from '../../pages/Home';

const Header = ({menuOpen, setMenuOpen}) => {
    const menuIcon = menuOpen ? <HiX/> : <HiMenu/>;
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <>
        <button className='burger__menu' onClick={handleToggle}>{menuIcon}</button>
        <header className='header'>
            <Navbar setMenuOpen={setMenuOpen}/>
        </header>
    </>
  )
}

export const ResponsiveMenu = ({menuOpen, setMenuOpen}) => {
    return(
        <div className={`res__menu ${menuOpen ? 
        'res__menu__open' : ''}`}>
            <Navbar setMenuOpen={setMenuOpen}/>
        </div>
    );
};

const Navbar = ({setMenuOpen}) => {
    return (
        <>
            <nav className='header__nav'>
                <ul className="nav__list">
                    <li>
                        <a href='#reviews' onClick={() => setMenuOpen(false)}>REVIEWS</a>
                    </li>
                    <li>
                        <a href='#payment' onClick={() => setMenuOpen(false)}>SHIPPING AND PAYMENT</a>
                    </li>
                    <li>
                        <a href='#battery' onClick={() => setMenuOpen(false)}>WHOLESALE</a>
                    </li>
                    <li>
                        <a href='#control' onClick={() => setMenuOpen(false)}>BLOG</a>
                    </li>
                    <li>
                        <a href='#footer' onClick={() => setMenuOpen(false)}>CONTACTS</a>
                    </li>
                </ul>
                <div className="nav__logo">
                    <a href='#logo' onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="" />
                    </a>
                </div>
            </nav>
            <div className="nav__icons">
                <Home className='nav__icons__cart nav-icon'/>
                <BsInstagram className='nav__icons__insta nav-icon'/>
                <a className="nav__icons nav-icons__phone" href="tel:+1 (888) 888-88-88">
                    <span className='nav__icons__number'>+1 (888) 888-88-88</span>
                    <FiPhone className='nav-icon nav-icon__phone'/>
                </a>
            </div>
        </>
    )
}

export default Header



