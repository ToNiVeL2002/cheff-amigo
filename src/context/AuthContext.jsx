import { useContext, createContext, useEffect, useState } from 'react'

import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {auth} from '../api/firebase.config'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect( auth, provider )
    }

    const logOut = () => {
        signOut( auth )
    }

    useEffect(() => {
        const unsubscreibe = onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscreibe()
        }
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {
                children
            }

        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
