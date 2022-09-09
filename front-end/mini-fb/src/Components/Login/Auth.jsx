import React, { useContext, useState } from 'react';

import Card from '../UIElements/Card';
import Input from '../UIElements/Elements/Input';
import Button from '../UIElements/Elements/Button';
import ImageUpload from '../UIElements/Elements/ImageUpload';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../UIElements/utils/Validators';
import { useForm } from '../UIElements/hooks/form-hook';
import { AuthContext } from '../UIElements/Context/Auth-Context';
import { useHttpClient } from '../UIElements/hooks/http-hooks';
import ErrorModal from '../UIElements/Elements/ErrorModal';
import LoadingSpinner from '../UIElements/Elements/LoadingSpinner';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          image: {
            value: null,
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    if(isLoginMode) {
      try {
        const responseData = await sendRequest('http://localhost:5000/api/users/login', 'POST', JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            // 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH',
          }
        )
        auth.login(responseData.userId, responseData.name, responseData.image);
      } catch (err){
          console.log("login denied");
      }

    } else {
      try {
        const formData = new FormData();
        formData.append('email', formState.inputs.email.value);
        formData.append('name', formState.inputs.name.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image', formState.inputs.image.value);
        const responseData = await sendRequest('http://localhost:5000/api/users/register', 'POST', formData
        )
        auth.login(responseData.userId, responseData.name, responseData.image);
      
      } catch (err){
       
      }
    }
  };

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
    <Card className="authentication">
      {isLoading && <LoadingSpinner asOverlay />}
      <h2 className='mt-4'>{isLoginMode ? 'Login' : 'Register'}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Full Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please provide your Name."
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && <ImageUpload center id="image" onInput={inputHandler}/>}
            <Input
              element="input"
              id="email"
              type="email"
              label="E-Mail"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please provide a valid Email Address."
              onInput={inputHandler}
            />
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid Password, at least 6 characters."
              onInput={inputHandler}
            />
          </div>
          <div className="col-3"></div>
        </div>
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'Login' : 'Register'}
        </Button><br /><br />
      </form>
      <div className="container w-75">
        <Button inverse onClick={switchModeHandler}>
          Switch To {isLoginMode ? 'Register' : 'Login'}
        </Button><br /><br />
      </div>
    </Card>
    </React.Fragment>
  );
};

export default Auth;
