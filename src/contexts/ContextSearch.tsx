import React, { type Dispatch, createContext, useState } from 'react'

interface ContextSearchProps {
  dataToSearch: string
  setDataToSearch: Dispatch<React.SetStateAction<string>>
  dataSearched: string
  setDataSearched: Dispatch<React.SetStateAction<string>>
}

export const ContextSearch = createContext<ContextSearchProps>({
  dataToSearch: '',
  setDataSearched: () => {},
  dataSearched: '',
  setDataToSearch: () => {}
})

interface SearchProviderProps {
  children: React.ReactElement
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [dataToSearch, setDataToSearch] = useState<string>('')
  const [dataSearched, setDataSearched] = useState<string>('')

  return (
    <ContextSearch.Provider value={{ dataToSearch, setDataToSearch, dataSearched, setDataSearched }}>
      {children}
    </ContextSearch.Provider>
  )
}
