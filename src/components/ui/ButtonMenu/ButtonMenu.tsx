import React, { useState, useEffect } from 'react'
import { useWidthDetector } from '../../../hooks/useWidthDetector'
import './ButtonMenu.css'
import { useLocation } from 'react-router-dom'

interface ButtonProps {
  onClick: () => void
}

export const ButtonMenu: React.FC<ButtonProps> = ({ onClick }) => {
  const { isMobile } = useWidthDetector()
  const [animation, setAnimation] = useState<boolean>(false)

  useEffect(() => {
    setAnimation(!animation)
  }, [onClick])

  const location = useLocation()
  useEffect(() => {
    setAnimation(false)
  }, [location.pathname])

  return (
    <article className={`ButtonMenu ${animation ? 'ButtonMenuAnimation' : ''} `} style={{ display: isMobile ? 'flex' : 'none' }} onClick={onClick}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
    </article>
  )
}
