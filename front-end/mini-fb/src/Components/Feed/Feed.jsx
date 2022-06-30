import React from 'react'
import Story from '../Story/Story'
import './Feed.css'

const Feed = () => {
  return (
    <div className='container-fluid m-5'>
      <Story />
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a status here" id="floatingTextarea" style={{height: "100px"}}></textarea>
                    <label htmlFor="floatingTextarea">Share your thoughts?</label>
                </div>
            </div>
            <div className='col-2'>
            <button className='btn my-4'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Feed
