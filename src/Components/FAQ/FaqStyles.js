import styled from 'styled-components'

export const AccordionSection = styled.section`
  display: grid;
  background-color: var(--secondary-bg);
  grid-template-columns: 60%;
  justify-content: center;
  padding: 50px 40px;

  @media screen and (max-width:1100px){
    grid-template-columns: 90%;
  }

  @media screen and (max-width: 800px){
    grid-template-columns: 100%;
  }
`

export const AccordionContainer = styled.article`
  padding: 40px 20px;
`

export const AccordionMainHeading = styled.h2`
  text-align: center;
  font-size: 40px;
`

export const AccordionMainSubHeading = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: var(--secondary-text-color);
`

export const AccordionBox = styled.div`
  
`

export const AccordionQuestion = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: var(--secondary-gradient);
  padding: 10px 15px;
  box-shadow: 1px 1px 25px 1px var(--quatenary-text-color);
  margin: 5px 0;
  cursor: pointer;

  &:hover h2, &:hover span{
    color: var(--secondary-text-color);
  }

`

export const AccordionAnswer = styled.article`

`

export const AccordionHeading = styled.h2`
  color: var(--primary-text-color);
  font-weight: 400;
  padding: 10px 0;
  font-size: 20px;

  @media only screen and (max-width: 600px){
    font-size: 17px;
  }
`

export const AccordionParagraph = styled.p`
  padding: 10px 20px;
  font-size: 18px;
`

export const AccordionIcon = styled.span`
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: bold;
`