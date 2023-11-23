/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css'
import {TodoProvider} from './Contexts'
import TodoForm from './Component/todoForm';
import TodoItem from './Component/todoItem';

function App() {
  const [todos, setTodo] = useState([]);
  
  const addTodo=(todoMsg)=>{
    setTodo((prev)=>[...prev, {id:Date.now(), ...todoMsg}]);
  }

  const updateTodo=(id,todoMsg)=>{
    setTodo((prev)=>prev.map((prevTodos)=> (prevTodos.id === id ? todoMsg : prevTodos)))
  }

  const deleteTodo=(id)=>{
   setTodo((prev)=>prev.filter((prevTodo)=> (prevTodo.id !== id)));
  }

  const toggleComplete=(id)=>{
    setTodo((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(()=>{
     const todos = JSON.parse(localStorage.getItem('todos'));

     if(todos && todos.length > 0){
       setTodo(todos)
     }
  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
     
  },[todos])

  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
