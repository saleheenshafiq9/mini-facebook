import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import ThoughtsList from './ThoughtsList'

const Thoughts = props => {
    const THOUGHTS = [
        {
            id: 'c1',
            caption: 'OMG! CR7 is leaving man utd...again. So we need a striker badly. Any decent striker available in the market? 😶😶😶',
            postmaker: 'Saleheen Shafiq',
            creator: 1,
            time: '18 hours ago',
            image: '../../Assets/self.jpg'
        },
        {
            id: 'c2',
            caption: 'Some birds are not meant to be caged. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure.',
            postmaker: 'Saleheen Shafiq',
            creator: 1,
            time: '2 days ago',
            image: '../../Assets/self.jpg'
        },
        {
            id: 'c3',
            caption: "We’re finding it difficult to recall simple things: names of friends and co-workers we haven't seen in a while, words that should come easily, even how to perform routine acts.",
            postmaker: 'Saleheen Shafiq',
            creator: 1,
            time: '2 days ago',
            image: '../../Assets/self.jpg'
        }
    ]

    const caption = props.caption;

    const newThought = {
        id: 'c4',
        caption: caption,
        postmaker: 'Saleheen Shafiq',
        creator: 1,
        time: 'just now',
        image: '../../Assets/self.jpg'
    }

    const userId = useParams().userId;
    const loadedThoughts = THOUGHTS.filter(thought => thought.creator === userId);

    if(props.isPost === true) {
        THOUGHTS.unshift(newThought);
    }

  return (
    <div>
      <ThoughtsList items={THOUGHTS}/>
    </div>
  )
}

export default Thoughts
