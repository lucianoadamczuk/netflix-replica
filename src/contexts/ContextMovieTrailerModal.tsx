import React, { type ReactNode, type Dispatch, createContext, useState } from 'react'

interface ContextProps {
  isMovieTrailerModalOpen: boolean
  setIsMovieTrailerModalOpen: Dispatch<React.SetStateAction<boolean>>
  videoID: undefined | number
  setVideoID: Dispatch<React.SetStateAction<undefined | number>>
}

export const ContextMovieTrailerModal = createContext<ContextProps>({
  isMovieTrailerModalOpen: false,
  setIsMovieTrailerModalOpen: () => {},
  videoID: undefined,
  setVideoID: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export const ProviderMovieTrailerModal: React.FC<ProviderProps> = ({ children }) => {
  const [isMovieTrailerModalOpen, setIsMovieTrailerModalOpen] = useState(false)
  const [videoID, setVideoID] = useState<undefined | number>(undefined)

  return (
    <ContextMovieTrailerModal.Provider value={
      {
        isMovieTrailerModalOpen,
        setIsMovieTrailerModalOpen,
        videoID,
        setVideoID
      }
    }>
      {children}
    </ContextMovieTrailerModal.Provider>
  )
}
