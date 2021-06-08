import React, { useState, useEffect, useRef } from 'react'
import { NavContainer, NavLogo, NavLogoTitle, NavMenu, NavItem, StyledNavLink , NavLogin } from './NavbarStyles'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavbarData from './NavbarData';
import Button from '../Button/Button';
import { BtnData } from '../Button/ButtonData';
import "./Navbar.css";
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [ click, setClick ] = useState(null);
  const [ navbar, setNavbar ] = useState(false)

  const handleClick = () => {
    setClick(!click);
  }

  const changeBackground = () => {
    if(window.scrollY >= 140 ) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  let menuRef = useRef();

  const detectClickOutsideNav = (event) => {
    if(!menuRef.current.contains(event.target)) {
      setClick(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', detectClickOutsideNav, false)

    return () => {
      document.removeEventListener('mousedown', detectClickOutsideNav, false)
    }
  }, [])

  return (
    <NavContainer className={ navbar ? 'active navbar' : 'navbar' }>

      <a href="/">
        <NavLogo>
          <img src='/images/cryptocurrency.svg' />
          <NavLogoTitle>COININ</NavLogoTitle>
      </NavLogo>
      </a>

      <NavMenu click={click} ref={menuRef}>
        {
          NavbarData.map(({id, title, href}) => (
            <NavItem key={id}>
              <StyledNavLink to={href} smooth
              >{title}</StyledNavLink>
            </NavItem>
          ))
        }
        <Button>{BtnData.Login}</Button>
      </NavMenu>

      <NavLogin onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars /> }
      </NavLogin>

    </NavContainer>
  )
}

export default Navbar