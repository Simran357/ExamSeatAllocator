import React from 'react'
import { Routes, Route } from 'react-router'
import Courses from './Components/Courses'
import Students from './Components/Students'
import Rooms from './Components/Rooms'
import DateSheet from './Components/DateSheet'
import SeatPlan from './Components/SeatPlan'
import Settings from './Components/Settings'
import Login from './Components/Form/Login'
import Register from './Components/Form/Register'
import ProtectedRoute from './Components/ProtectedRoute'
import DashboardHome from './Components/DashboardHome'
import DashboardLayout from './Components/Layout'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

         {/* Protected Dashboard Layout */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="SeatPlan"  element={<SeatPlan />} />
        <Route path="Settings"  element={<Settings />} />
        <Route path="courses" element={<Courses />} />
        <Route path="students" element={<Students />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="datesheet" element={<DateSheet />} />
      </Route>

    </Routes>

  )
}

export default App
