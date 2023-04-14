
import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';



function App() {
  
  const [taskList, setTaskList] = useState([])

  const handleChange = (event) => {
    
  }
  const addTask = (newTask) => setTaskList([...taskList, newTask])
   console.log('List', taskList)
   

  return (
    <div className="App">
      <h1>App:</h1>
    <Form addTask={addTask}/>
    <List taskList={taskList} />
    </div>
  );
}

export default App;
