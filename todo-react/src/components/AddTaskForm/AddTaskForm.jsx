import Field from '../Fields/Field.jsx';
import Button from '../Button/Button.jsx';
import { useContext, useState } from 'react';
import { TasksContext } from '../../context/TasksContext.jsx';

// Component:

const AddTaskForm = (props) => {
  const { styles } = props

  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef, 
  } = useContext(TasksContext) // Props destructuring

  const [error, setError] = useState(''); // Error state for form validation
  

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0


  // Handlers:

  const onSubmit = (event) => {
    event.preventDefault() // This will override the standard browser behavior and the page will not reload / The form won't be sended.
    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle) // Call the addTask function with the new task title as an argument.
    }
  }

  const onInput = (event) => {
    const { value } = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0


    setNewTaskTitle(value)
    setError(hasOnlySpaces ? 'Task title cannot contain only spaces' : '') // Set error message if the input contains only spaces, otherwise clear the error message.
  }

  // Render:
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
      className={styles.field}
      label="New task title"
      id="new-task"
      value={newTaskTitle}
      error={error}
      onInput={onInput}
      ref={newTaskInputRef}
      />
      <Button 
        type="submit"
        isDisabled={isNewTaskTitleEmpty}
        >
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm