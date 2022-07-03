import React from 'react'
import Card from '../UIElements/Card'

import './Thought.css'

const ThoughtsItem = props => {
  return (
    <div>
      <li className='thought-item'>
        <Card className="thought-item__content">
            <div className="thought-item__info">
                <h5>{props.postmaker}</h5>
                <p className='text text-secondary'>{props.time}</p>
                <p>{props.caption}</p>
            </div>
        </Card>
      </li>
    </div>
  )
}

export default ThoughtsItem
