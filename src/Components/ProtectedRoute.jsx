import React, { useContext } from 'react'
import { GlobalState } from './Context/StateManagement'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    const {auth} = useContext(GlobalState)
    return  auth ? children : <Navigate  to="/login"/>

}

export default ProtectedRoute