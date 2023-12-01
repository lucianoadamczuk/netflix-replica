import React, { useContext, useRef } from 'react'
import { IconMagnifying } from '../../icons/IconMagnifying'
import './Searchbar.css'
import { useNavigate } from 'react-router-dom'
import { routesConfig } from '../../routes/routesConfig'
import { ContextSearch } from '../../contexts/ContextSearch'

export const Searchbar: React.FC = () => {
  const navigate = useNavigate()
  const { search: searchRoute } = routesConfig
  const { dataSearched, setDataSearched, setDataToSearch } = useContext(ContextSearch)

  function handleInput (e: React.ChangeEvent<HTMLInputElement>): void {
    setDataSearched(e?.target?.value)
  }

  function search (): void {
    setDataToSearch(dataSearched)
    navigate(searchRoute.path)
  }

  // Clicking on IconMagnifying the input's value on screen clears without affect the dataSearched value, which will be rendered in case of there is no matches
  const inputRef = useRef<HTMLInputElement>(null)
  function clearInput (): void {
    if ((inputRef.current) != null) {
      inputRef.current.value = ''
    }
  }

  return (
    <article className="Searchbar">
      <IconMagnifying onClick={() => { search(); clearInput() }}/>
      <input
        ref={inputRef}
        type="text"
        placeholder='Search by movies or series'
        onChange={(e) => { handleInput(e) }}
      />
    </article>
  )
}
