import TodoItem from './TodoItem.jsx'

// Component:

const TodoList = (props) => {
  const { 
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props // Props destructuring

  // Check for tasks:
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  // Render:

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem 
          className="todo__item" 
          key={task.id}
          onDeleteTaskButtonClick = {onDeleteTaskButtonClick}
          onTaskCompleteChange = {onTaskCompleteChange}
          {...task} 
        />
      ))}
    </ul>
  )
}

export default TodoList