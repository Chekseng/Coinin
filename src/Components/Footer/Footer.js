import React from 'react'
import { first, second, third, fourth } from './FooterData'
import { FooterSection, FooterBox, FooterFirst, FooterSecond, FooterThird, FooterFourth } from './FooterStyles'

const Footer = () => {
  return (
    <FooterSection className="footer-section">
      <FooterBox>
        
        <FooterFirst>
          <div>
            <img src="/images/cryptocurrency.svg" alt="cryptocurrency" />
            <h2>{first.title}</h2>
          </div>
            <p>{first.desc}</p>
            <p>{first.copyright}</p>
        </FooterFirst>

        <FooterSecond>
          <h3>{second.title}</h3>
          {
            second.links.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </FooterSecond>

        <FooterThird>
          <h3>{third.title}</h3>
          {
            third.links.map((item,index) => (
              <p key={index}>{item}</p>
            ))
          }
        </FooterThird>

        <FooterFourth>
          <h3>{fourth.title}</h3>
          <div>
          {
            fourth.icons.map((item,index) => (
              <span key={index}>
                {item}
              </span>
            ))
          }
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/cryptocurrency/img/appstore.png" alt="app-store" name="app-store" />
            <img src="https://preview.colorlib.com/theme/cryptocurrency/img/playstore.png" name="google-store" alt="google-store" />
          </div>
        </FooterFourth>

      </FooterBox>
    </FooterSection>
  )
}

export default Footer
