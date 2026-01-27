import TodoItem from './TodoItem.jsx'

// Component:

const TodoList = (props) => {
  const { 
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
    filteredTasks,
    firstrIncompleteTaskRef,
    firstIncompleteTaskId
  } = props // Props destructuring

  // Check for tasks:
  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet!</div>;
  }

  if(hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">No tasks match your search!</div>
  }

  // Render:

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem 
          className="todo__item" 
          key={task.id}
          ref={task.id === firstIncompleteTaskId ? firstrIncompleteTaskRef : null}
          onDeleteTaskButtonClick = {onDeleteTaskButtonClick}
          onTaskCompleteChange = {onTaskCompleteChange}
          {...task} 
        />
      ))}
    </ul>
  )
}

export default TodoList