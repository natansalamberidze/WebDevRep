import Field from "./Field.jsx"

// Component:

  const SearchTaskForm = (props) => {

  const { onSearchInput } = props // Props destructuring

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
        onInput={(event) => onSearchInput(event.target.value)}
      />
    </form>
  );
}

export default SearchTaskForm