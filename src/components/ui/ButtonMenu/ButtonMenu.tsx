import React from 'react'
import { useWidthDetector } from '../../../hooks/useWidthDetector'
import './ButtonMenu.css'

interface ButtonProps {
  onClick: () => void
}

export const ButtonMenu: React.FC<ButtonProps> = ({ onClick }) => {
  const { isMobile } = useWidthDetector()

  return (
    <article className='ButtonMenu ' style={{ display: isMobile ? 'flex' : 'none' }} onClick={onClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </article>
  )
}
