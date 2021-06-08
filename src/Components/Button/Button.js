import React from 'react'
import { Btn, STYLES, SIZES } from './ButtonStyles'
import "./Button.css"

const Button = ({children, btnStyle, btnSize}) => {

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <Btn className={`btn ${checkBtnStyle} ${checkBtnSize}`}>
      {children}
    </Btn>
  )
}

export default Button
