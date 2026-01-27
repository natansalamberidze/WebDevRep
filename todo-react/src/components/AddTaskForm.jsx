import Field from './Field.jsx';
import Button from './Button.jsx';

// Component:

const AddTaskForm = (props) => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef, 
  } = props // Props destructuring


  // Handlers:

  const onSubmit = (event) => {
    event.preventDefault() // This will override the standard browser behavior and the page will not reload / The form won't be sended.
    addTask()
  }

  // Render:
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
      className="todo__field"
      label="New task title"
      id="new-task"
      value={newTaskTitle}
      onInput={(event) => setNewTaskTitle(event.target.value)}
      ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm