import React from 'react'
import { AboutSection, AboutBox, AboutLeft, AboutRight, AboutHeading, AboutSubHeading, AboutParagraph } from './AboutStyles'

const About = () => {
  return (
    <AboutSection id="About">

      <AboutBox>
        <AboutLeft><img src="/images/cryptocurrency-about.svg" alt='cryptocurrency' /></AboutLeft>
        <AboutRight>
          <AboutHeading>About Us</AboutHeading>
          <AboutSubHeading>Get To Know More About Us</AboutSubHeading>

          <AboutParagraph>Welcome to coinin. Providing you with the best mobile and web platform to buy, sell, exchange and send the top 100 cryptocurrencies.</AboutParagraph>
        </AboutRight>
      </AboutBox>
    </AboutSection>
  )
}

export default About
