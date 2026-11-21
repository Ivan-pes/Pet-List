import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";


const ToDo = () => {
  const params = [
    { id: 'task-1', title: 'Prepere diner', isDone: true },
    { id: 'task-2', title: 'kiss eva', isDone: true },

  ];

    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
     <AddTaskForm />
      <SearchTaskForm />
        <ToDoInfo
          total={params.length}
          done={params.filter(({ done }) => done).length}
        />
      <ToDoList tasks={params} />
    </div>
    )
}

export default ToDo;