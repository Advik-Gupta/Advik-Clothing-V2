import React from 'react'
import { AuthenticationContainer } from './authentication.styles.jsx'
import SignUpForm from '../../components/signup/sign-up-form.component'
import SignInForm from '../../components/signin/sign-in-form.component'

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication