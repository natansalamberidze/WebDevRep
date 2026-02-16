import { memo, useContext } from "react"
import { TasksContext } from "../context/TasksContext.jsx"
import RouterLink from "./RouterLink"

// Component:

const TodoItem = (props) => {
  const {
    className = "",
    id,
    title,
    isDone,
  } = props; // Props destructuring

// Context:

    const {
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
      deleteTask,
      toggleTaskComplete,
  } = useContext(TasksContext)

// Render:

  return (
    <li 
      className={`todo-item ${className}`} 
      ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
    >
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={({ target }) => {
          toggleTaskComplete(id, target.checked);
        }}
      />
      <label 
        className="todo-item__label visually__hidden" 
        htmlFor={id}
      >
        {title}
      </label>
      <RouterLink 
        to={`/tasks/${id}`}
        // aria-labelledby="Task detail page"
        style={{ textDecoration: 'none' }}
      >
        {'Check <--'}
      </RouterLink>
      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  )
}

export default memo(TodoItem)