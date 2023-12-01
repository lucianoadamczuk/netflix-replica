import React, { useContext } from 'react'
import { ContextSearch } from '../../contexts/ContextSearch'

import './ContainerErrorSearching.css'

interface ContainerErrorSearchingProps {
  emptySearch: boolean
}

// This component might be displayed for 2 reasons:
//    Case 1) If dataSearch is an empty string. In this case it means that the us entered to PageSearch without writing in the Searchbar
//    Case 2) If there there isn't data when the use search something

export const ContainerErrorSearching: React.FC<ContainerErrorSearchingProps> = ({ emptySearch }) => {
  const { dataToSearch } = useContext(ContextSearch)

  if (emptySearch) {
    return (
      <article className='ContainerErrorSearching'>
        <div className='textContainer'>
        <h3>Ey, wait a moment!</h3>
        <p>You didn&apos;t search something</p>
        <h5>Suggestions:</h5>
        <ul>
          <li>Try with a keyword</li>
          <li>Try with a specific movie or serie</li>
        </ul>
      </div>
    </article>
    )
  } else {
    return (
      <article className='ContainerErrorSearching'>
        <div className="textContainer">
          <h3>We are so sorry</h3>
          <p>The &quot;{dataToSearch}&quot; search didn&apos;t yield coincidences.</p>
          <h5>Suggestions:</h5>
          <ul>
            <li>Try with other keyword</li>
            <li>Are you searching a movie or series?</li>
            <li>Try with the name of a movie or series</li>
          </ul>
        </div>
      </article>
    )
  }
}
