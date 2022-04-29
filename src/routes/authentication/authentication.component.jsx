import React from 'react'
import SignUpForm from '../../components/signup/sign-up-form.component'
import SignInForm from '../../components/signin/sign-in-form.component'
import './authentication.styles.scss'

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication