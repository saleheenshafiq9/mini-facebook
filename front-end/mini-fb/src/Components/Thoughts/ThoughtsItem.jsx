import React from 'react'
import Card from '../UIElements/Card'

import './Thought.css'

const ThoughtsItem = props => {
  return (
    <div>
      <li className='thought-item'>
        <Card className="thought-item__content">
            <div className="thought-item__info">
              <img src={`http://localhost:5000/${props.image}`} alt={props.postmaker} style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%"
              }} className="my-3"/>
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
