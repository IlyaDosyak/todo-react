import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";

const ToDo = () => {
  const tasks = [
    { id: 1, title: "Buy groceries", isDone: false },
    { id: 2, title: "Walk the dog", isDone: true },
    { id: 3, title: "Finish project", isDone: false },
  ];

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm />

      <SearchTaskForm />

      <ToDoInfo />

      <ToDoList tasks={tasks} />
    </div>
  );
};

export default ToDo;
