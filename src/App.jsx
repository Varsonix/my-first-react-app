import './App.css'
import Gallery from './components/Lessons/Exercises/Statues/SculptureList'
import Form from './components/Lessons/Exercises/FormInput/FormTest'
import FeedbackForm from './components/Lessons/Exercises/FormInput/FormCrashFix'
import TrafficLight from './components/Lessons/Exercises/StreetLights/Light'
import Clock from './components/Lessons/Exercises/ClockUpdate/Clock'
import Contact from './components/Lessons/Exercises/Authorization/Authorization'

function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="Page">
      <Contact />
    </div>
  )
}

export default App
