import './App.css'
import ColorPicker from './components/Lessons/Basic Concepts/useState/ColorPicker'

function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="Page">
      <ColorPicker />
    </div>
  )
}

export default App
