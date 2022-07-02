import React from 'react'
import Story from '../Story/Story'
import './Feed.css'

const Feed = () => {
  const addStatusHandler = () => {

  }

  return (
    <div className='container-fluid m-5'>
      <Story />
      <form onSubmit={addStatusHandler}>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a status here" id="floatingTextarea" style={{height: "100px"}}></textarea>
                    <label htmlFor="floatingTextarea">Share your thoughts?</label>
                </div>
            </div>
            <div className='col-2'>
            <button className='btn my-4' type='submit'>Post</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Feed
