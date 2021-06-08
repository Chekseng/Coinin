import styled from 'styled-components'

export const FooterSection = styled.footer`
  // background-image: var(--primary-gradient);
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  &.footer-section{
    background-image: var(--secondary-gradient), url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width:1200px){
    grid-template-columns: 100%;
  }

  @media only screen and (max-width: 900px){
    grid-template-columns: 80%;
  }

  
`
export const FooterBox = styled.article`
  display: grid;
  grid-template-columns: 30% 15% 15% 25%;
  grid-column-gap: 30px;
  justify-content: center;

  @media only screen and (max-width:900px){
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
  }

  @media only screen and (max-width: 700px){
    grid-template-columns: 100%;
  }
`

export const FooterFirst = styled.div`

  & div{
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }

  & div img{
    width: 40px;
    height: 40px;
  }

  & div h2{
    color: var(--primary-text-color);
    padding-left: 10px;
    font-size: 25px;
    font-family: "Didact Gothic", sans-serif;
    text-transform: uppercase;
  }

  & p{
    color: var(--primary-text-color);
    font-size: 17px;
    font-weight: 300;
    padding-bottom: 20px;
  }
`

export const FooterSecond = styled.div`

  & h3{
    font-size: 25px;
    padding-bottom: 10px;
  }

  & p{
    color: var(--primary-text-color);
    font-size: 17px;
    padding-bottom: 10px;
  }
`

export const FooterThird = styled.div`

  & h3{
    font-size: 25px;
    padding-bottom: 10px;
  }

  & p{
    color: var(--primary-text-color);
    font-size: 17px;
    padding-bottom: 10px;
  }
`

export const FooterFourth = styled.div`

  & h3{
    font-size: 25px;
    padding-bottom: 10px;
    
  }

  & h3 + div{
    padding-bottom: 10px;
  }

  & h3 + div span {
    color: var(--primary-text-color);
    font-size: 25px;
    margin-right: 10px;
  }

  & div:last-child{
    display: grid;
    grid-template-columns: 40% 40%;
    grid-column-gap: 10px;
  }

  & div:last-child img{
    cursor: pointer;
  }
`
