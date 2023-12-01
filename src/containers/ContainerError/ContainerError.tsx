import React from 'react'
import { Button } from '../../components/ui/Button/Button'
import './ContainerError.css'
import { useNavigate } from 'react-router-dom'

export const ContainerError: React.FC = () => {
  const navigate = useNavigate()
  const goBack = (): void => { navigate(-1) }
  return (
    <article className='ContainerError'>

      <div className="textContainer">
        <h4 className='title'>Ups, we have an error here.</h4>
        <p>We are so sorry! <br /> It seems to be that there is a problem in our database. </p>
      </div>

      <Button title='Go back' primary={true} onClick={() => { goBack() }} />

    </article>
  )
}
