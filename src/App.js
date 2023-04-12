import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Bravo from './Components/bravo';
import Charlie from './Components/Charlie';



function App() {
  const [userInput, setUserInput] = useState('')
  const [name, setName] = useState('')

  let person = 'River'

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }
  const handleClick = () => {
    setName(userInput)
    setUserInput('')
  }
  return (
    <div className="App">
      <h1>App: {name}</h1>
      <input placeholder="What's Your Name?" value={userInput} onChange={handleChange}/>
      <button onClick={handleClick}>ChangeName</button>
      <Bravo personName={person}/> 
      <Bravo personName="Averie"/>
      <Charlie />
      <Charlie num={25}/>
      <Charlie num={75}/>
      <Charlie num="75" /> 
    </div>
  );
}

export default App;
