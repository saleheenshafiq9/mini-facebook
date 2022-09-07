import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHttpClient } from '../UIElements/hooks/http-hooks'
import StoriesList from './StoriesList'
import './Story.css'

const Story = props => {

    const newStory = {
        id: 's1',
        postmaker: 'Saleheen Shafiq',
        creator: 1,
        time: 'just now',
        image: '../../Assets/self.jpg'
    }

    const [loadedStories, setLoadedStories] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const userId = useParams().userId;

    useEffect(() => {
        const fetchStories = async () => {
            const responseData = await sendRequest('http://localhost:5000/api/stories');
            setLoadedStories(responseData.stories);
        };
        fetchStories();
    }, [sendRequest])

    if(props.isPost === true) {
        STORIES.unshift(newStory);
    }

  return (
    <div>
        <StoriesList items={loadedStories}/>
    </div>
  )
}

export default Story