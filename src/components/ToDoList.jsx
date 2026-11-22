import ToDoItemn from "./ToDoItem";

const ToDoList = (props) => {

  const {
    tasks = [],
    onDeleetTask,
    onTaskCompleteCamge,
  } = props


  const therTasks = true;
  
  

    if (!therTasks) {
        return <div className="todo__empty-message"></div>
    }
    
    return ( 
        <ul className="todo__list">
        {tasks.map((itemn) => (
          <ToDoItemn
            key={itemn.id}
            onDeleetTask={onDeleetTask}
            onTaskCompleteCamge={onTaskCompleteCamge}
            {...itemn}
          />
        ))}
      </ul>
    )
}
export default ToDoList;