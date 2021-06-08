import React from 'react'
import Button from '../Button/Button'
import { ContactContainer, ContactHeading, ContactSubHeading, ContactUpper, ContactLower } from './ContactStyles'
import { BtnData } from '../Button/ButtonData' 

const Contact = () => {
  return (
    <ContactContainer id="Contact">
      <ContactHeading>Subscribe To Newsletter</ContactHeading>
      <ContactSubHeading>To Get More Information Weekly, Subscribe To Our Newsletter.</ContactSubHeading>

      <ContactUpper>
        <img src="https://preview.colorlib.com/theme/cryptian/assets/img/c-logo-3.png" alt="logo-1" />
        <img src="https://preview.colorlib.com/theme/cryptian/assets/img/c-logo-4.png" alt="logo-2" />
        <img src="https://preview.colorlib.com/theme/cryptian/assets/img/c-logo-5.png" alt="logo-3" />
        <img src="https://preview.colorlib.com/theme/cryptian/assets/img/c-logo-3.png" alt="logo-4" />
        <img src="https://preview.colorlib.com/theme/cryptian/assets/img/c-logo-2.png" alt="logo-5" />
      </ContactUpper>

      <ContactLower>
        <form>
          <input type="text" placeholder="enter email" required />
          <Button btnStyle="btn-contact">{BtnData.Submit}</Button>
        </form>
      </ContactLower>
    </ContactContainer>
  )
}

export default Contact
