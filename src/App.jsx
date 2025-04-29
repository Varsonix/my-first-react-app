import './App.css'
import ColorPicker from './components/Lessons/Basic Concepts/useState/ColorPicker'
import EditProfile from './components/Lessons/Exercises/FormSubmittalExample/FormSubmit';
import Counter from './components/Lessons/Exercises/useEffect/useEffectTesting';

function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <Counter />
  )

}

export default App
