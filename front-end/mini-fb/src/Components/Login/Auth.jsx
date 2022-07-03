import React, { useContext, useState } from 'react';

import Card from '../UIElements/Card';
import Input from '../UIElements/Elements/Input';
import Button from '../UIElements/Elements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../UIElements/utils/Validators';
import { useForm } from '../UIElements/hooks/form-hook';
import { AuthContext } from '../UIElements/Context/Auth-Context';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);
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
          name: undefined
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
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Card className="authentication">
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
  );
};

export default Auth;
