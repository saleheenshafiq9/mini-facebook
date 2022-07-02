import React from 'react'
import Card from '../UIElements/Card'

import './Thought.css'
import Avatar from '../UIElements/Avatar'

const ThoughtsItem = props => {
  return (
    <div>
      <li className='thought-item'>
        <Card className="thought-item__content">
            <div className="thought-item__info">
                <h3>{props.postmaker}</h3>
                <p>{props.caption}</p>
            </div>
        </Card>
      </li>
    </div>
  )
}

export default ThoughtsItem
