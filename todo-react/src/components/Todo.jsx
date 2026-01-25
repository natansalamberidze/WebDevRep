import AddTaskForm from './AddTaskForm.jsx'
import SearchTaskForm from './SearchTaskForm.jsx'
import TodoInfo from './TodoInfo.jsx'
import TodoList from './TodoList.jsx'

const Todo = () => {

  const tasks = [
    { id: 'task-1', title: 'Buy a car', isDone: false },
    { id: 'task-2', title: 'Buy a house', isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log('All tasks were deleted!')
  }

  const deleteTask = (taskId) => {
    console.log(`Delete task with id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`The task ${taskId} ${isDone ? 'Is done' : 'Is not done'}`)
  }

  const filterTasks = (query) => {
    console.log(`Search: ${query}`)
  }

  const addTask = () => {
    console.log('The task is added!')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask = {addTask}
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