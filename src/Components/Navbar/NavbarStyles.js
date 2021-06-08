import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


export const NavContainer = styled.nav`
  transition: all ease 0.9s;

  @media screen and (max-width: 1200px){
    padding: 10px 30px;
  }

  @media screen and (max-width: 1000px){
    
  }

  @media screen and (max-width:900px){
    padding: 10px 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-image: var(--primary-gradient);
  }
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  & img{
    width: 40px;
  }
`

export const NavLogoTitle = styled.span`
  font-family: 'Didact Gothic', sans-serif;
  font-weight: 700;
  font-size: 30px;
  padding-left: 5px;
  color: var(--primary-text-color);
`

export const NavMenu = styled.ul`
  display: flex;

  @media only screen and (max-width:900px){
    display: ${({click}) => click ? 'flex' : 'none'};
    flex-direction: column;
    padding-top: 20px;
  }
`

export const NavItem = styled.li`
  padding: 10px 15px;
  font-size: 18px;
`

export const StyledNavLink = styled(HashLink)`
  color: var(--primary-text-color);

  &:hover{
    color: var(--tetiary-text-color);
  }

  &.active{
    color: var(--tetiary-text-color);
  }

  @media only screen and (max-width:1000px){
    color: var(--primary-text-color);

    &:hover{
      color: var(--secondary-text-color);
    }
  }
`

export const NavLogin = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  color: var(--primary-text-color);
  
  @media only screen and (max-width:900px){
    display: block;
    top: 0;
    right: 0;
    margin: 15px 20px;

    &:hover{
      color: var(--secondary-text-color);
    }
  }
`
