import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import tasksApi from "../api/tasksApi";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (isConfirmed) {
      tasksApi.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (id) => {
      tasksApi.delete(id).then(() => {
        setTasks(tasks.filter((t) => t.id !== id));
      });
    },

    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (id, isDone) => {
      tasksApi
        .toggleComplete(id, isDone)
        .then(() =>
          setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone } : t))),
        );
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };

    tasksApi.add(newTask).then((addedTask) => {
      setTasks((prev) => [...prev, addedTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current?.focus();

    tasksApi.getAll().then(setTasks);
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
    tasks,
    filteredTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    addTask,
    newTaskInputRef,
  };
};
export default useTasks;
