import logo from './logo.svg';
import './App.css';

import Bravo from './Components/bravo';
import Charlie from './Components/Charlie';

let person = 'River'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Bravo personName={person}/> 
      <Bravo personName="Averie"/>
      <Charlie />
      <Charlie num={25}/>
      <Charlie num={75}/>
    </div>
  );
}

export default App;
