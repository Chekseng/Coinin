import styled from 'styled-components'

export const ContactContainer = styled.section`
  background-image: var(--primary-gradient);
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

export const ContactBox = styled.article`

`

export const ContactHeading = styled.h2`
  text-align: center;
  color: var(--primary-text-color);
  font-size: 40px;
`

export const ContactSubHeading = styled.h3`
  text-align: center;
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 1000px){
    padding-bottom: 20px;
  }
`

export const ContactUpper = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  padding: 20px 0 20px 60px;
  align-items: center;

  @media only screen and (max-width: 1200px){
    grid-template-columns: 30% 30% 30%;
    grid-row-gap: 30px;
  }

  @media only screen and (max-width:900px){
    grid-template-columns: 100%;
  }
`

export const ContactLower = styled.div`
  

  & form{
    width: 60%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 80% 20%;

    @media only screen and (max-width: 1200px){
      grid-template-columns: 70% 30%;
    }

    @media only screen and (max-width: 1000px){
      grid-template-columns: 100%;
    }
  }

  & input{
    padding: 10px 20px;
  }
`