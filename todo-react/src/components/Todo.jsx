import { useState, useEffect, useRef  } from 'react'
import AddTaskForm from './AddTaskForm.jsx'
import SearchTaskForm from './SearchTaskForm.jsx'
import TodoInfo from './TodoInfo.jsx'
import TodoList from './TodoList.jsx'
import Button from './Button.jsx';


// States:

const Todo = () => {
  // const [tasks, setTasks] = useState([
  //   { id: 'task-1', title: 'Buy a car', isDone: false },
  //   { id: 'task-2', title: 'Buy a house', isDone: true },
  // ]) // Initial tasks state

    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem("tasks"); // Load tasks from local storage

      if (savedTasks) {
        return JSON.parse(savedTasks); // Parse and set tasks
      }

      return [
        { id: "task-1", title: "Buy a car", isDone: false },
        { id: "task-2", title: "Buy a house", isDone: true }
      ]
    })

  const [newTaskTitle, setNewTaskTitle] = useState('') // New task title state

  const [searchQuery, setSearchQuery] = useState('') // Search query state

  const newTaskInputRef = useRef(null) // Ref for new task input field

  const firstIncompleteTaskRef = useRef(null) // Ref for first incomplete task

  const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id // Find the first incomplete task

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

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),  
        title: newTaskTitle,
        isDone: false,
      }
      setTasks([...tasks, newTask]) // Add new task to tasks array
      setNewTaskTitle('') // Clear new task title input
      setSearchQuery('') // Clear search query after adding a task
      newTaskInputRef.current.focus() // Focus the new task input field after adding a task
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
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to local storage
    return () => {

    };
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus(); // Focus the new task input field when the component mounts
    return () => {

    };
  }, []);


  // Render:

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
    ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) // Filter tasks by search query with ternary operator
    : null


  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth', })}
        >
        Show first incomplete task
      </Button>
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstrIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
}

export default Todo