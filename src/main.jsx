import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Profile from './components/Lessons/Exercises/ImageSizeTest/ImageSizeTest'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
  </StrictMode>
)
