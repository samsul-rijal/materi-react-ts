import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/AuthContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <ToastContainer position='top-center' autoClose={3000} />
      <App />
    </AuthContextProvider>
  </StrictMode>,
)
