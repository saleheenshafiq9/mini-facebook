import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import Story from '../Story/Story'
import Thoughts from '../Thoughts/Thoughts'
import { validate, VALIDATOR_REQUIRE } from '../UIElements/utils/Validators'
import './Feed.css'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
      };
      
    default:
      return state;
  }
}

const Feed = () => {
  const [putStatus, setPutStatus] = useState(false);
  const [inputState, dispatch] = useReducer(inputReducer, {value: ''})

  const changeStatus = () => {
    setPutStatus(true);
  }

  const addStatusHandler = event => {
    event.preventDefault();
    changeStatus();
  }

  const changeHandler = event => {
    dispatch({type: 'CHANGE', 
              val: event.target.value,
            })
  }

  return (
    <>
    <div className='container-fluid m-5'>
      <form onSubmit={addStatusHandler}>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a status here" id="floatingTextarea" style={{height: "100px"}} onChange={changeHandler}
                    value={inputState.value}></textarea>
                    <label htmlFor="floatingTextarea">Share your thoughts?</label>
                </div>
            </div>
            <div className='col-2'>
            <button className='btn my-4' type='submit'>Post</button>
            </div>
        </div>
      </form>
    </div>
    <Thoughts className="center" caption={inputState.value} isPost={putStatus}/>
    </>
  )
}

export default Feed
