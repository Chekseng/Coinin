import styled from 'styled-components'

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  padding: 100px 0;
  background-color: var(--secondary-bg);
`

export const AboutBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  
  @media screen and (max-width:1000px){
    grid-template-columns: 100%;
  }
`

export const AboutLeft = styled.article`
  @media screen and (max-width:1000px){
    order: 1;
    margin-top: 60px;
  }
`

export const AboutRight = styled.article`
  padding: 30px 40px;

  @media screen and (max-width:1200px){
    padding: 0 40px;
  }
`

export const AboutHeading = styled.h2`
  font-size: 40px;
  padding: 70px 0 15px;

  @media only screen and (max-width:1200px){
    padding: 0 0 15px;
  }
`

export const AboutSubHeading = styled.h3`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 15px;
`

export const AboutParagraph = styled.p`
  font-size: 17px;
  padding-right: 40px;

  @media screen and (max-width: 1200px){
    padding-right: 0;
  }
`
