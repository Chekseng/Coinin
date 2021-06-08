import styled from 'styled-components'

export const HeroWrapper = styled.section`
  background-image: linear-gradient(to right, #000000c0, #00000040);
  height: 100vh;
  width: 100%;
  z-index: 1;

  & video{
    object-fit: cover;
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: absolute;
  }
`

export const HeroBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 80px;

  @media only screen and (max-width: 1300px){
    grid-template-columns: 100%;
  }
`

export const HeroBoxLeft = styled.article`
  color: #fff;
  padding: 140px 0 0 200px;

  @media only screen and (max-width:1300px){
    padding: 140px 150px 0;
    text-align: center;
  }

  @media only screen and (max-width: 1000px){
    padding: 140px 50px;
  }

  @media only screen and (max-width:700px){
    padding: 100px 50px;
  }

`

export const HeroBoxLeftHeading = styled.h1`
  font-size: 45px;
  color: var(--primary-text-color);

  @media screen and (max-width:500px){
    font-size: 35px;
  }
`

export const HeroBoxLeftSubHeading = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0;
  color: var(--primary-text-color);

  @media screen and (max-width: 500px){
    font-size: 17px;
  }
`

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  margin: 0 40px 0 0;
  padding-top: 30px;
  justify-content: space-between;

  @media only screen and (max-width:1300px){
    justify-content: space-around;
    margin-left: 30px;
  }
`

export const HeroBoxRight = styled.article`
  padding: 160px 0 0 40px;

  & div{
    background-image: url('https://preview.colorlib.com/theme/cryptocurrency/img/laptop.png');
    height: 330px;
    width: 75%;
    background-size: cover;
  }

  @media only screen and (max-width:1300px){
    display: none;
  }
`
