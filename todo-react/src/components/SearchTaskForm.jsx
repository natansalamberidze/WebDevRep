import { useContext } from "react";
import Field from "./Field.jsx"
import { TasksContext } from "../context/TasksContext.jsx";

// Component:

  const SearchTaskForm = () => {

  const { searchQuery, setSearchQuery } = useContext(TasksContext) // Use context to get searchQuery and setSearchQuery

  // Render:

  return (
    <form className="todo__form"
      onSubmit=
      {(event) => {
        event.preventDefault();
      }}
    >
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}

export default SearchTaskForm