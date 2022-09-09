import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useReducer } from 'react'
import Story from '../Story/Story'
import Thoughts from '../Thoughts/Thoughts'
import { useHttpClient } from '../UIElements/hooks/http-hooks'
import { AuthContext } from '../UIElements/Context/Auth-Context'
import { validate, VALIDATOR_REQUIRE } from '../UIElements/utils/Validators'
import ErrorModal from '../UIElements/Elements/ErrorModal'
import LoadingSpinner from '../UIElements/Elements/LoadingSpinner'
import './Feed.css'
import { useContext } from 'react'
import '../UIElements/Elements/ImageUpload.css';
import Button from '../UIElements/Elements/Button'


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
  const auth = useContext(AuthContext);
  const [putStatus, setPutStatus] = useState(false);
  const [inputState, dispatch] = useReducer(inputReducer, {value: ''})
  const {isLoading, error, sendRequest, clearError } = useHttpClient();
  const [putStory, setPutStory] = useState(false);

  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const changeStatus = () => {
    setPutStatus(true);
  }

  const changeStory = () => {
    setPutStory(true);
  }

  const addStatusHandler = async event => {
    event.preventDefault();
    var formPostDate = new Date();
    var postDate = formPostDate.getHours() + ':' + formPostDate.getMinutes() + ' ' + formPostDate.toLocaleString('default', { month: 'long' }) + ' ' + formPostDate.getDate();
    try {
      
      await sendRequest('http://localhost:5000/api/thoughts', 'POST', JSON.stringify({
        caption: inputState.value,
        creator: auth.userId,
        postmaker: auth.username,
        image: auth.image,
        time: postDate
      }),
      { 
        'Content-Type': 'application/json'
    })
    } catch(err) {

    }
    changeStatus();
    // window.location.reload();
  }

  const changeHandler = event => {
    dispatch({type: 'CHANGE', 
              val: event.target.value,
            })
  }

  const storySubmitHandler = async event => {
    event.preventDefault();

    try {
      var formPostDate = new Date();
      var postDate = formPostDate.getHours() + ':' + formPostDate.getMinutes() + ' ' + formPostDate.toLocaleString('default', { month: 'long' }) + ' ' + formPostDate.getDate();
      const formData = new FormData();
        formData.append('creator', auth.userId);
        formData.append('postmaker', auth.username);
        formData.append('image', file);
        formData.append('time', postDate);
        const responseData = await sendRequest('http://localhost:5000/api/stories', 'POST', formData)
    //   await sendRequest('http://localhost:5000/api/stories', 'POST', JSON.stringify({
    //     creator: auth.userId,
    //     postmaker: auth.username,
    //     image: previewUrl,
    //     time: postDate
    //   }),
    //  )
    } catch(err) {

    }
    changeStory();
  }

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-2 form-control">
          <form onSubmit={storySubmitHandler}>
            <input
            type="file"
            accept=".jpg,.png,.jpeg"
            id={auth.userId}
            ref={filePickerRef}
            style={{ display: 'none' }}
            onChange={pickedHandler}
            />
            <div className={`image-upload center`}>
              <div className="story-upload__preview">
                {previewUrl && <img src={previewUrl} alt="Preview" />}
                {!previewUrl && <img src='./add.png' />}
              </div>
              <Button type="button" onClick={pickImageHandler}>
                Add Story
              </Button>
            </div>
            <hr></hr>
            <Button type="submit">
              Post
            </Button>
          </form>
        </div>
        <div className="col-10">
          <Story className="center" isPost={putStory}/>
        </div>
      </div>
    </div>
    <div className='container-fluid m-5'>
      <React.Fragment>
        {/* <ErrorModal error={error} onClear={clearError} /> */}
      <form onSubmit={addStatusHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className='row'>
            <div className='col-2 mt-5'>
              <img src="./thought-bubble.png" alt="thought-bubble" width="50px" height="50px" style={{
                float: "right"
              }}/>
            </div>
            <div className='col-6'>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a status here" id="floatingTextarea" style={{height: "100px"}} onChange={changeHandler}
                    value={inputState.value}></textarea>
                    <label htmlFor="floatingTextarea">Share your thoughts?</label>
                </div>
            </div>
            <div className='col-2'>
            <button className='btn my-5' type='submit'>Post</button>
            </div>
        </div>
      </form>
      </React.Fragment>
    </div>
    <Thoughts className="center" caption={inputState.value} isPost={putStatus}/>
    </>
  )
}

export default Feed
