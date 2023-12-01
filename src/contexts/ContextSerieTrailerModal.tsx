import React, { type ReactNode, type Dispatch, createContext, useState } from 'react'

interface ContextProps {
  isSerieTrailerModalOpen: boolean
  setIsSerieTrailerModalOpen: Dispatch<React.SetStateAction<boolean>>
  videoID: undefined | number
  setVideoID: Dispatch<React.SetStateAction<undefined | number>>
}

export const ContextSerieTrailerModal = createContext<ContextProps>({
  isSerieTrailerModalOpen: false,
  setIsSerieTrailerModalOpen: () => {},
  videoID: undefined,
  setVideoID: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export const ProviderSerieTrailerModal: React.FC<ProviderProps> = ({ children }) => {
  const [isSerieTrailerModalOpen, setIsSerieTrailerModalOpen] = useState(false)
  const [videoID, setVideoID] = useState<undefined | number>(undefined)

  return (
    <ContextSerieTrailerModal.Provider value={
      {
        isSerieTrailerModalOpen,
        setIsSerieTrailerModalOpen,
        videoID,
        setVideoID
      }
    }>
      {children}
    </ContextSerieTrailerModal.Provider>
  )
}
