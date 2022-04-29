import React, { useEffect } from 'react'
import { auth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import  { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/signup/sign-up-form.component'

const SingIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(response);
    }

    return (
        <div>
            SingIn
            <button onClick={logGoogleUser}>
                Sign In with Google
            </button>
            <SignUpForm />
        </div>
    )
}

export default SingIn