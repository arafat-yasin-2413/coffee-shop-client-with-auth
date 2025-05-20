import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../firebase/firebase.init';
import { deleteUser } from 'firebase/auth';

const AuthProvider = ({children}) => {






    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const userDelete = () =>{
        const user = auth.currentUser;
        return deleteUser(user);
    }


    const userInfo = {
        createUser,
        userDelete,
        
    }



    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;