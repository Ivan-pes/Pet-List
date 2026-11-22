import Field from "./Field"
import Button from "./Button"


const AddTaskForm = (props) => {
  const {
    submitTask,
 } = props

  const onSubmit = (event) => {
    event.preventDefault()
    submitTask()
  }

    return (
<form className="todo__form" onSubmit={onSubmit} >
        <Field
          className="todo__field"
          id="newTask"
          label="New Task"
        />
        <Button  type="submit"  children="Add" />
      </form>
    )
}

export default AddTaskForm