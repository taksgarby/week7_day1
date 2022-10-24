import React, {useState} from 'react';
import './App.css';

function App() {
  const [chores, setChores] = useState(
    [
      { name: 'Do laundry', priority: 'high'},
      { name: 'Gardening', priority: 'low'},
      { name: 'Wash dishes', priority: 'high'}
    ]
  )

  const [newChore, setNewChore] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const choreNodes = chores.map((chore, index) => {
    return (
      <li key = {index} className = {chore.priority}>
        <span>{chore.name}- Priority: {chore.priority}</span>
      </li>
    )
  }) 

   const handleChoreInput = (event) => {
    setNewChore(event.target.value);
   } ;

   const handlePriorityInput = (event) => {
    setNewPriority(event.target.value);
   } ;



   const saveNewChore = (event) => {
    event.preventDefault();
    const copyChores = [...chores]
    
    copyChores.push({name: newChore, priority: newPriority})
    setChores(copyChores);
    setNewChore("")
   }

  



  return (
    <div>
    <h1>To do list</h1>
    <hr></hr>
    <ul>
      {choreNodes}
    </ul>

    <form onSubmit = {saveNewChore}>
      <label htmlFor = 'new-chore'>Add a new chore:</label>
      <input type="text" id='new-chore' value={newChore} onChange= {handleChoreInput}/>
    
      <label for = 'low'>Low</label>  
      <input type="radio" id='low' value={newPriority} name='priority' onChange= {handlePriorityInput}></input>
      <label for = 'high'>High</label>  
      <input type="radio" id='high' value={newPriority} name='priority' onChange= {handlePriorityInput}></input>
      
      <input type = "submit" value = "Save New Chore"/>
    </form>

    </div>
  );
}

export default App;
