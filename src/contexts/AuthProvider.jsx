import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../firebase/firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';



const AuthProvider = ({children}) => {






    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {
        createUser,
        signInUser,
       
        
    }



    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;