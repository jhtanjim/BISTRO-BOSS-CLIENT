import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // createuser
    const createUser = (email, password) => {
        setLoading(truea)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin/login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)

    }
    // logout/signout

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe;
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;