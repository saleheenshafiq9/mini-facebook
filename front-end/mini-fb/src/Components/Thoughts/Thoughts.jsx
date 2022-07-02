import React from 'react'
import ThoughtsList from './ThoughtsList'

const Thoughts = () => {
    const THOUGHTS = [
        {
            id: 'c1',
            caption: 'OMG! CR7 is leaving man utd...again',
            postmaker: 'Saleheen Shafiq',
            imageUrl: './self.jpg'
        },
        {
            id: 'c2',
            caption: 'Institutions are thinking about moving to online classes after eid',
            postmaker: 'Ben Chilwell',
            imageUrl: './self.jpg'
        }
    ]
    
  return (
    <div>
      <ThoughtsList items={THOUGHTS}/>
    </div>
  )
}

export default Thoughts
