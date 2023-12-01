import React from 'react'

import './Button.css'

interface ButtonProps {
  primary: boolean
  title: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick, primary, title }) => {
  return (
    <button className={`Button ${primary ? '' : 'ButtonSecondary'}`} onClick={onClick}>
      <p> {title} </p>
    </button>
  )
}
