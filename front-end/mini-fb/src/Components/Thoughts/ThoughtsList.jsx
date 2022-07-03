import React from 'react'
import Card from '../UIElements/Card'
import ThoughtsItem from './ThoughtsItem'
import './Thought.css'

const ThoughtsList = props => {
    if(props.items.length === 0) {
        return (
            <div className='thought-list center'>
                <Card>
                    <h2>No thoughts posted.</h2>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <ul className='thought-list'>
                {props.items.map(thought => 
                    <ThoughtsItem 
                        key={thought.id}
                        id={thought.id}
                        caption={thought.caption}
                        postmaker={thought.postmaker}
                        time={thought.time}
                        image={thought.image}
                        creator={thought.creator}
                    />)}
            </ul>
        </div>
    )
}

export default ThoughtsList
