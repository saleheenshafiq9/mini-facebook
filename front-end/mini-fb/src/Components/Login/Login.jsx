import React from 'react'
import Card from '../UIElements/Card'
import Input from '../UIElements/Elements/Input'
import Button from '../UIElements/Elements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../UIElements/utils/Validators'
import { useForm } from '../UIElements/hooks/form-hook'
import './Login.css'

const Login = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

    const authSubmitHandler = event => {
        event.preventDefault();
    }

  return (
    <div className='container mt-5 w-50'>
      <Card className="authentication">
        <h2 className='mt-3'>Login</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <Input
                        element="input" 
                        id="email"
                        type="email"
                        label="E-mail"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please provide a valid E-mail Address"
                        onInput={inputHandler}/>
                    <Input
                        element="input" 
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please provide a valid Password [at least six characters]"
                        onInput={inputHandler}/>
                </div>
                <div className="col-3"></div>
            </div>
            <button type="submit" disabled={formState.isValid} className="btn ml-5">Login</button><br /><br />
        </form>
      </Card>
    </div>
  )
}

export default Login
