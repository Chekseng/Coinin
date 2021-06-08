import styled from 'styled-components'

export const TeamSection = styled.section`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  background-color: var(--secondary-bg);
  padding: 100px 0 80px;

  @media only screen and (max-width: 1100px){
    grid-template-columns: 100%;
  }

  @media only screen and (max-width:700px){
    grid-template-columns: 80%;
  }
`

export const TeamMainHeading = styled.h2`
  text-align: center;
  font-size: 40px;
`

export const TeamMainSubHeading = styled.h3`
  text-align: center;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 20px;

  @media only screen and (max-width: 1100px){
    padding: 0 40px 20px;
  }
`

export const TeamBox = styled.article`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-around;
  margin-top: 30px;

  @media only screen and (max-width: 900px){
    grid-template-columns: 50% 50%;
    grid-row-gap: 30px;
  }

  @media only screen and (max-width: 700px){
    grid-template-columns: 100%;
  }
`

export const TeamItem = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`

export const TeamImage = styled.div`
  padding: 120px;
  background-size: cover;
  border-radius: 50%;
  width: 70%;
  margin: 0 auto;
`

export const TeamHeading = styled.h2`
  padding: 15px 0 10px;
  color: var(--secondary-text-color);
`

export const TeamRole = styled.h4`
  padding-bottom: 10px;
  color: var(--tetiary-text-color);
  font-weight: 400;
  font-style: normal;
`

export const TeamParagraph = styled.p`
  padding: 0 10px 10px;
  font-style: italic;
  color: var(--quatenary-text-color);
`

export const TeamIconBox = styled.div`
  & span{
    font-size: 25px;
    color: var(--tetiary-text-color);
    margin: 0 5px;
    cursor: pointer;
    transition: all ease 0.5s;
  }

  & span:hover{
    color: var(--quatenary-text-color);
    transition: all 0.5s ease;
  }
`