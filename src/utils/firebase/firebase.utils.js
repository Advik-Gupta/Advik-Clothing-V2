import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqpJeu7OIpgeyLdJzU0N51z7Vq19R0HMo",
    authDomain: "advik-clothing-v2.firebaseapp.com",
    projectId: "advik-clothing-v2",
    storageBucket: "advik-clothing-v2.appspot.com",
    messagingSenderId: "569951903844",
    appId: "1:569951903844:web:f50c745f0c5dc1e3893f71",
    measurementId: "G-7VHF37V2SZ"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if (!userAuth) return;

    const userDocRef = await doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        const userData = { displayName, email, createdAt, ...additionalInfo };
        
        try {
            await setDoc(userDocRef, userData);
        } catch (error) {
            console.log('Error creating new user', error.message);
        }
    }

    return userDocRef;
}

export const createUserDocumentFromEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const sinInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
}