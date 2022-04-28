import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

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
        </div>
    )
}

export default SingIn