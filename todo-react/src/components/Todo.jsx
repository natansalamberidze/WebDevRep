import { useState } from 'react'
import { useEffect } from 'react'
import AddTaskForm from './AddTaskForm.jsx'
import SearchTaskForm from './SearchTaskForm.jsx'
import TodoInfo from './TodoInfo.jsx'
import TodoList from './TodoList.jsx'


// States:

const Todo = () => {
  // const [tasks, setTasks] = useState([
  //   { id: 'task-1', title: 'Buy a car', isDone: false },
  //   { id: 'task-2', title: 'Buy a house', isDone: true },
  // ]) // Initial tasks state

    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks') // Load tasks from local storage

      if (savedTasks) {
        return JSON.parse(savedTasks) // Parse and set tasks
      }

      return [
        { id: 'task-1', title: 'Buy a car', isDone: false },
        { id: 'task-2', title: 'Buy a house', isDone: true },
      ]
    })

  const [newTaskTitle, setNewTaskTitle] = useState('') // New task title state


// Handlers:

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone }
        }
        return task
      })
    )
  }

  const filterTasks = (query) => {
    console.log(`Search: ${query}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),  
        title: newTaskTitle,
        isDone: false,
      }
      setTasks([...tasks, newTask])
      setNewTaskTitle('')
    }
  }

  // Effects/ Hooks:

  //   useEffect(() => {
  //   console.log('The Todo component has been assembled, loading data from the storage into the tasks')
  //   const savedTasks = localStorage.getItem('tasks') // Load tasks from local storage

  //   if (savedTasks) {
  //     setTasks(JSON.parse(savedTasks)) // Parse and set tasks
  //   }
  //   return () => {
      
  //   };
  // }, []);

  useEffect(() => {
    // console.log('Save data in the storage couse tasks were changed!', tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks)) // Save tasks to local storage
    return () => {
      
    };
  }, [tasks]);
  // Render:

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask = {addTask}
        newTaskTitle = {newTaskTitle}
        setNewTaskTitle = {setNewTaskTitle}
      />
      <SearchTaskForm
        onSearchInput = {filterTasks}
      />
      <TodoInfo 
        total = {tasks.length}
        done = {tasks.filter(({isDone}) => isDone).length}
        onDeleteAllButtonClick = {deleteAllTasks}
      />
      <TodoList 
        tasks = {tasks}
        onDeleteTaskButtonClick = {deleteTask}
        onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
  )
}

export default Todo