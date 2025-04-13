import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExerciseOne from './components/ExerciseOne'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExerciseOne />
    {/* <ButtonTest /> */}
  </StrictMode>
)
