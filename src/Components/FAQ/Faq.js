import React, { useState } from 'react'
// import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { AccordionSection, AccordionContainer, AccordionBox, AccordionQuestion, AccordionAnswer, AccordionParagraph, AccordionIcon, AccordionHeading, AccordionMainHeading, AccordionMainSubHeading } from './FaqStyles'
import FaqData from './FaqData'

const Faq = () => {
  const [ click, setClick ] = useState(false)

  const toggle = (index) => {
    if(click === index){
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <AccordionSection id="FAQ">
      <AccordionMainHeading>Frequently Asked Questions</AccordionMainHeading>
      <AccordionMainSubHeading>Here Are A Few Frequently Asked Questions.s</AccordionMainSubHeading>
      <AccordionContainer>
        {
          FaqData.map((item,index) => (
            <AccordionBox key={index}>

              <AccordionQuestion key={index} onClick={() => toggle(index)}>
                <AccordionHeading>{item.question}</AccordionHeading>
                <AccordionIcon>{click === index ? <FiMinus /> : <FiPlus />}</AccordionIcon>
              </AccordionQuestion>
              {
                click === index ? (
                  <AccordionAnswer>
                    <AccordionParagraph>{item.answer}</AccordionParagraph>
                  </AccordionAnswer>
                ) : null
              }
            </AccordionBox>
          )) 
        }
      </AccordionContainer>
    </AccordionSection>
  )
}

export default Faq
