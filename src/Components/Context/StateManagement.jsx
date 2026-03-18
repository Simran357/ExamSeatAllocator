import { createContext, useState } from "react";
import React from 'react'

export const GlobalState = createContext()


const StateManagement = ({ children }) => {
    const [auth, setAuth] = useState({
    user: null,
    role: null
})
    const [role,setRole] = useState()  
    return (
        <GlobalState.Provider value={{ auth, setAuth, role ,setRole }}>
            {children}
        </GlobalState.Provider>
    )
}

export default StateManagement