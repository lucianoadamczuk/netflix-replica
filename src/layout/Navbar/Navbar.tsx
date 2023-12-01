import React, { useContext, useState, useEffect } from 'react'
import { API_TMDB_CONTEXT } from '../../apis/API_TMDB'
import './Navbar.css'
import { ButtonMenu } from '../../components/ui/ButtonMenu/ButtonMenu'
import { routesConfig } from '../../routes/routesConfig'
import { NavLink } from 'react-router-dom'
import { useWidthDetector } from '../../hooks/useWidthDetector'
import { Searchbar } from '../../widgets/Searchbar/Searchbar'

export const Navbar: React.FC = () => {
  const { IMAGE_URL } = useContext(API_TMDB_CONTEXT)
  const { isMobile } = useWidthDetector()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll (): void {
      if (window.scrollY > 300) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { home, movies, series } = routesConfig
  const routeElements = [home, movies, series]

  return (
    <nav className={`${isMenuOpen && isMobile ? 'navBackground' : ''} ${!isMobile && isScrolled ? 'navBackground' : ''} `} >
      <img src={IMAGE_URL + '/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'} alt="Netflix logo" />
      <div className={`linksContainer ${isMobile && isMenuOpen ? 'linksContainerOpen' : ''} `} >
        {
          routeElements.map((item, index) =>
            <NavLink
              to={item.path}
              key={index}
              onClick={() => { setIsMenuOpen(!isMenuOpen) } }
            >
              {item.name}
            </NavLink>
          )
        }
          <Searchbar/>
      </div>
      <ButtonMenu onClick={() => { setIsMenuOpen(!isMenuOpen) }}/>
    </nav>
  )
}
