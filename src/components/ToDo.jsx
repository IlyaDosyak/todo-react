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

  const deleteAllTasks = () => {};

  const deleteTask = (id) => {};

  const toggleTaskComplete = (id, isDone) => {};

  const filterTasks = (query) => {};

  const addTask = () => {};

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm addTask={addTask} />

      <SearchTaskForm onSearchInput={filterTasks} />

      <ToDoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />

      <ToDoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default ToDo;
