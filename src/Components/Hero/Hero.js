import React from 'react'
import { HeroWrapper , HeroBox, HeroBoxLeft, HeroBoxRight, HeroBoxLeftHeading, HeroBoxLeftSubHeading, ButtonBox } from './HeroStyles'
import Button from '../Button/Button'
import { BtnData } from '../Button/ButtonData' 

const Hero = () => {
  return (
    <HeroWrapper id="Hero">

      <video src='/videos/backgroundVideo.mp4' autoPlay loop muted></video>

      <HeroBox>

        <HeroBoxLeft>

          <HeroBoxLeftHeading>
            Fast Growing Ico Agency For BlockChain Investors And Founders
          </HeroBoxLeftHeading>

          <HeroBoxLeftSubHeading>
            Giving you the ability to buy and sell cryptocurrency in one minute, trade anywhere and stay in touch.
          </HeroBoxLeftSubHeading>

          <ButtonBox>
            <Button btnStyle="btn-hero"><a href="/#Trade" style={{color: 'white'}}>{BtnData.Trade}</a></Button>
            <Button btnStyle="btn-hero"><a href="/#Trade" style={{color: 'white'}}>{BtnData.Search}</a></Button>
          </ButtonBox>
        </HeroBoxLeft>  

        <HeroBoxRight>
          <div></div>
        </HeroBoxRight>

      
      </HeroBox>

    </HeroWrapper>
  )
}

export default Hero
