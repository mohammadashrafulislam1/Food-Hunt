import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
    
        const unsubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser)
        });
        // stop observing while unmount
        return ()=>{
            return unsubscribe()
        };
    });
    const logOut =()=>{
        return signOut(auth)
    }
    
    const signIn= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleLoginWithGoogle =()=>{
     signInWithPopup(auth, googleProvider)
     .then(result =>{
        setUser(result.user)
     })
     .catch(e =>{
        console.log(e)
     })
    };
    const handleLoginWithGithub =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user)
         })
         .catch(e =>{
            console.log(e)
         })
    }
    const authInfo ={
        user,
        createUser,
        loading,
        logOut,
        signIn,
        handleLoginWithGoogle,
        handleLoginWithGithub
    }
    return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;