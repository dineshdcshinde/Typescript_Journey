import {useState} from 'react'
import './App.css'
import {nanoid} from "nanoid"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Todo{
  id: string,
  completed: boolean, 
  task: string
}

function App() { 
const [todos,setTodos] = useState<Todo[]>([]);
const [task, setTask] = useState("")
  
const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  add(task);
}


// add
const add = (task:string)=>{
if(!task){

  toast.warn('🦄 Please enter a task!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce
  })

  return;
}
  setTodos((prev)=>[...prev,{
    id:nanoid(),
    task: task,
    completed: false
  }])

  setTask("")
}

// Toggle
const toggle =(id:string)=>{
  setTodos((prevTodos) =>
  prevTodos.map((todo) =>
  todo.id === id ? { ...todo, completed: !todo.completed } : todo
));
}

// handle edit
const handleEdit = (id: string) => {
  const todoToEdit = todos.find((todo) => todo.id === id);

  if (todoToEdit) {
    setTask(todoToEdit.task); // Set the task input to the current task value
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id) // Remove the todo being edited
    );
  }
};

  return (
    <>
    <div className='container min-h-screen w-full bg-slate-700 '>
      <h1 className='text-center pt-2 text-2xl font-medium text-white'>Todo Application</h1>

    <div className="formWrapper p-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add
      </button>
      </form>

      {/* Showing the todos */}
      <div className="todoList mt-6 text-white">
      {todos.length > 0 ? (
        <ul className="space-y-2">

        {todos.map((todo) => (
          <li
          key={todo?.id}
          className="flex justify-between items-center p-2 bg-gray-800 rounded-md"
          >
          <span
            className={`${
            todo?.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo?.task}
          </span>

          <button className='text-green-500 hover:text-green-700 transition'
             onClick={()=>toggle(todo?.id)} 
              
          >{todo?.completed === true? "✅": "🙏"}</button>


          <button
            onClick={()=> handleEdit(todo?.id)}
            className="text-blue-500 hover:text-blue-700
            transition">
            Edit
          </button>

          <button
            className="text-red-500 hover:text-red-700 transition"
            onClick={() =>
            setTodos(todos.filter((t) => t.id !== todo?.id))
            }
          >
            Delete
          </button>

          </li>
        ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">No tasks available</p>
      )}
      </div>
    </div>
    </div>


    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}

export default App
