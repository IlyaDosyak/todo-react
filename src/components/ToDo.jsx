import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", isDone: false },
    { id: 2, title: "Walk the dog", isDone: true },
    { id: 3, title: "Finish project", isDone: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteAllTasks = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (isConfirmed) setTasks([]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTaskComplete = (id, isDone) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone } : t)));
  };

  const filterTasks = (query) => {};

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />

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
