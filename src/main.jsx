import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateManagement from './Components/Context/StateManagement.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1094631214910-rdtgok4q75cv7t8488i6112nl19uetpq.apps.googleusercontent.com'>
  <StateManagement>
  <BrowserRouter>
    <App />
 </BrowserRouter>
 </StateManagement>
  </GoogleOAuthProvider>

)
