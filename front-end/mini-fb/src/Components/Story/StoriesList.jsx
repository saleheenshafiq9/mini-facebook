import React from 'react'
import StoriesItem from './StoriesItem'

const StoriesList = props => {
    return (
        <div className="container mt-4">
            {props.items?.map(story =>
                <StoriesItem
                    key={story.id}
                    id={story.id}
                    postmaker={story.postmaker}
                    time={story.time}
                    image={story.image}
                    creator={story.creator}
                />)}
        </div>
    )
}

export default StoriesList;