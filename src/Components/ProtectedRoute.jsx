import React, { useContext } from 'react'
import { GlobalState } from './Context/StateManagement'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(GlobalState)

  if (!auth) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute