import './App.css'
import ButtonTest from './components/Lessons/Exercises/UnderstandingProps/ButtonTest'

function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

function App() {

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <ButtonTest />
      <ButtonTest text="Don't Click me!" color="red" fontSize={12} />
      <ButtonTest fontSize={20} />
      <Button handleClick={() => handleButtonClick('https://www.google.com')} text="To Google!" color="green" fontSize={16} />
    </div>
  )
}

export default App
