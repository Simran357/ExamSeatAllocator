import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from './Components/Layout'
import Dashboard from './Components/Dasboard'
import Courses from './Components/Courses'
import Students from './Components/Students'
import Rooms from './Components/Rooms'
import DateSheet from './Components/DateSheet'
import SeatPlan from './Components/SeatPlan'
import Settings from './Components/Settings'
import Login from './Components/Form/Login'
import Register from './Components/Form/Register'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      {/* Layout = Header + Outlet */}
      <Route path="/" element={<Layout />}>

        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          indx
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="seatplan" element={<SeatPlan />} />
          <Route path="datesheet" element={<DateSheet />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
