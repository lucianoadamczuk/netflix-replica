import { useState, useEffect } from 'react'

interface Props {
  isMobile: boolean
}

export const useWidthDetector = (): Props => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  function detectWidth (): void {
    if (window.innerWidth < 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    detectWidth()
    window.addEventListener('resize', detectWidth)
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [])
  return { isMobile }
}
