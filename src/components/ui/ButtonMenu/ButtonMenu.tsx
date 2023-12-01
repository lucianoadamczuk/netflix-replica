import React, { useState } from 'react'
import { useWidthDetector } from '../../../hooks/useWidthDetector'
import './ButtonMenu.css'

interface ButtonProps {
  onClick: () => void
}

export const ButtonMenu: React.FC<ButtonProps> = ({ onClick }) => {
  const { isMobile } = useWidthDetector()
  const [animation, setAnimation] = useState<boolean>(false)

  function handleClick (): void {
    setAnimation(!animation)
    onClick()
  }
  return (
    <article className={`ButtonMenu ${animation ? 'ButtonMenuAnimation' : ''} `} style={{ display: isMobile ? 'flex' : 'none' }} onClick={handleClick}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
    </article>
  )
}
