import React, { useState } from 'react'
import { createUserDocumentFromEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component';

const defaultFormFeilds = {
  email: '',
  password: '',
  confirmPassword: '',
  displayName: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds)
  const { email, password, confirmPassword, displayName } = formFields

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await createUserDocumentFromEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, {displayName})
      setFormFields(defaultFormFeilds)
    } catch (error) {
      if (error.code = 'auth/email-already-in-use') {
        alert('Email is already in use')
      }
      console.log('Error creating new user', error.message)
    }
  }

  return (
    <div className='sign-up-container'>
        <h2>Dont have an account?</h2>
        <span>Sign up with Email and Password</span>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <FormInput label='Display Name' name='displayName' value={displayName} onChange={handleChange} type="text" required/>
            <FormInput label='Email' name='email' value={email} onChange={handleChange} type="email" required/>
            <FormInput label='Password' name='password' value={password} onChange={handleChange} type="password" required/>
            <FormInput label='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} type="password" required/>
            <Button type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm