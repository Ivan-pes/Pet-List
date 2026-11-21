import Field from "./Field"
import Button from "./Button"


const AddTaskForm = () => {
    return (
<form className="todo__form">
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