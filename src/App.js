import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shooping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
    
])

//Add Task

const addTask = (task) => {
  console.log(task)
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = {id, ...task}
  console.log(newTask)
  setTask([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTask(tasks.filter((task) => task.id !== id))
}

// Toogle reminder 

const toogleReminder = (id) => {
  setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToogle={toogleReminder}/> : 'NO TASKS'}
    </div>
  );
}

export default App;
