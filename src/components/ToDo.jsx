import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";


const ToDo = () => {
  const params = [
    { id: 'task-1', title: 'Prepere diner', isDone: true },
    { id: 'task-2', title: 'kiss eva', isDone: true },

  ];

  const deleteAllTasks = () => {
    console.log('Deleet tasks')
  };

  const deleteTask = (taskId) => {
    console.log(`task deleted with ${taskId}`)
  }

  const toggleCard = (taskId, isDone) => {
    console.log(`task is ${taskId}, ${isDone ? 'is done' : 'isnt done'}`)
  }

  const shearchForm = (query) => {
    console.log(`we found ${query}`)
  }

  const addTask = () => {
    console.log('task eded')
  }

    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
        submitTask={addTask}
        />
        <SearchTaskForm
        onSearchTask={shearchForm}
        />
        <ToDoInfo
          total={params.length}
          done={params.filter(({ done }) => done).length}
          onDeleteAllTasks={deleteAllTasks}
        />
        <ToDoList
          tasks={params}
          onDeleetTask={deleteTask}
          onTaskCompleteCamge={toggleCard}
        />
    </div>
    )
}

export default ToDo;