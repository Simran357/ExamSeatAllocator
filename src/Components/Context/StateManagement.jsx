import { createContext, useState } from "react";
import React from 'react'

export const GlobalState = createContext()


const StateManagement = ({ children }) => {
    const [auth, setAuth] = useState()
    return (
        <GlobalState.Provider value={{ auth, setAuth }}>
            {children}
        </GlobalState.Provider>
    )
}

export default StateManagement