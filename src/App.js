
import './App.css';
import {useState} from 'react'

function App() {
  let [toDos,setToDos]=useState([])
  let [toDo,setToDo]=useState("")
  
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[dayOfWeek];




  const deleteTodo = (index) => {
    const updatedTodos = toDos.filter((_, i) => i !== index);
    setToDos(updatedTodos);
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setToDos([...toDos,toDo]);setToDo('');}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value,index)=>{
            return(
                <div className="todo" key={index}>
                  <div className="left">
                    <input type="checkbox" name="" id="" />
                    <p >{value}</p>
                  </div>
                  <div className="right">
                    <i onClick={()=>deleteTodo(index)} className="fas fa-times"></i>
                  </div>
                </div>)
        })}
      </div>
    </div>
  );
}

export default App;
