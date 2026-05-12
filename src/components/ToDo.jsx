import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import { useEffect, useRef, useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  // const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);

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

  const addTask = () => {
    const newTaskTitle = newTaskInputRef.current.value.trim();
    if (newTaskTitle.length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      // setNewTaskTitle("");
      newTaskInputRef.current.value = "";
      setSearchQuery("");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks =
    clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm
        addTask={addTask}
        // newTaskTitle={newTaskTitle}
        // setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />

      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <ToDoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />

      <ToDoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
        filteredTasks={filteredTasks}
      />
    </div>
  );
};

export default ToDo;
