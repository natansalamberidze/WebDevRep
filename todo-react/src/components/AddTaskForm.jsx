import Field from './Field.jsx';
import Button from './Button.jsx';

const AddTaskForm = (props) => {
  const {
    addTask,
  } = props

  const onSubmit = (event) => {
    event.preventDefault() // This will override the standard browser behavior and the page will not reload / The form won't be sended.
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
      className="todo__field"
      label="New task title"
      id="new-task"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm