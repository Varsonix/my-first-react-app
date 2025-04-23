import './App.css'
import ColorPicker from './components/Lessons/Basic Concepts/useState/ColorPicker'
import EditProfile from './components/Lessons/Exercises/FormSubmittalExample/FormSubmit';

function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="Page">
      <EditProfile />
    </div>
  )
}

export default App
