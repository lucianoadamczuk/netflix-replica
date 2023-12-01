import React from 'react'
import './Page404.css'
import { Button } from '../../components/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function Page404 (): React.ReactNode {
  const navigate = useNavigate()

  function goBack (): void {
    navigate(-1)
  }

  return (
    <article className='Page404'>
      <div className="textContainer">
        <h3 className='title'>Ups! We are so sorry</h3>
        <p className='description'>It seems to be that the page doesn&acute;t exists </p>
      </div>

      <Button primary={false} title='Go Back' onClick={() => { goBack() }}/>
    </article>
  )
}
