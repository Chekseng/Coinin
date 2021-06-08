import styled from 'styled-components'

export const FeatureContainer = styled.section`
  background-image: var(--primary-gradient);
  display: grid; 
  grid-template-columns: 80%;
  justify-content: center;
  padding: 90px 0;
`

export const FeatureHeading = styled.h2`
  text-align: center;
  font-size: 40px;
  color: var(--primary-text-color);
`

export const FeatureSubHeading = styled.h3`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`

export const FeatureBox = styled.article`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  grid-gap: 30px;
  padding-top: 50px;

  @media only screen and (max-width:1200px){
    display: grid;
    grid-template-columns: 50% 50%;
  }

  @media only screen and (max-width:900px){
    display: grid;
    grid-template-columns: 100%;
  }
`

export const FeatureItem = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`

export const FeatureTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 10px;
`

export const FeatureParagraph = styled.p`
  color: var(--quinary-text-color);
  padding-right: 30px;

  @media only screen and (max-width: 1200px){
    padding-right: 0;
  }
`

export const FeatureBoxLeft = styled.div`
  color: var(--primary-text-color);
  font-size: 50px;
  padding: 10px 0 0 10px;
`

export const FeatureBoxRight = styled.div`

`