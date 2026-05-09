import AddTaskForm from "./components/AddTaskForm";
import SearchTaskForm from "./components/SearchTaskForm";
import ToDoInfo from "./components/ToDoInfo";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm />

      <SearchTaskForm />

      <ToDoInfo />

      <ToDoList />
    </div>
  );
};

export default App;
