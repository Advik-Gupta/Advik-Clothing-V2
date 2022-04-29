import React, { useState } from 'react'
import { createUserDocumentFromEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, sinInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'
import Button from '../button/button.component';

const defaultFormFeilds = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds)
  const { email, password } = formFields

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await sinInUserWithEmailAndPassword(email, password);
      console.log(response)
      setFormFields(defaultFormFeilds)
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password or email')
          break;
        
        case 'auth/user-not-found':
          alert('No user found, try signing up')
          break;

        default:
          console.log(error.message)
          break;
      }
      console.log('Error creating new user', error.message)  
    }
  }

  return (
    <div className='sign-up-container'>
        <h2>Have an account?</h2>
        <span>Sign in with Email and Password</span>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <FormInput label='Email' name='email' value={email} onChange={handleChange} type="email" required/>
            <FormInput label='Password' name='password' value={password} onChange={handleChange} type="password" required/>
            <div className="buttons-container">              
              <Button type='submit'>Sign In</Button>
              <Button onClick={signInWithGoogle} buttonType='google' type='button'>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm;