import Field from "./Field";
const SearchTaskForm = (props) => {

  const {
    onSearchTask,
 } = props

  return (
    <form
      className="todo__form"
    onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className="todo__field"
        id="search-task"
        label="Search Task"
        type="search"
        onInput={(event) => onSearchTask(event.target.value)}
      />
      </form>
    )
}
export default SearchTaskForm;