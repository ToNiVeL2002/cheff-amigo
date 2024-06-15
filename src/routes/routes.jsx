import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import Home from '../pages/Home'
import Loggin from '../pages/Loggin'
import Perfil from "../pages/Perfil"
import HomeInicio from "../pages/HomeInicio"

import {ProtectorRuta} from "../components/ProtectorRuta"


export function MyRoutes() {
    
    const {user} = UserAuth()
    const RequireAuth = ({children}) => {
        return user 
        ? children
        : <Navigate to={'/login'}/>
    }

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <RequireAuth>
                    <Home/>
                </RequireAuth>
            }/>
            <Route path="/login" element={<Loggin/>}/>
            <Route path="/perfil" element={
                <ProtectorRuta>
                    <Perfil/>
                </ProtectorRuta>
                // <Perfil/>
            }/>
            <Route path="/home" element={<HomeInicio/>} />
        </Routes>
        </BrowserRouter>
    )
}
