import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import StateManagement from './Components/Context/StateManagement.jsx'

createRoot(document.getElementById('root')).render(
  <StateManagement>
  <BrowserRouter>
    <App />
 </BrowserRouter>
 </StateManagement>
)
