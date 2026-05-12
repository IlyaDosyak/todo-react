import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (isConfirmed) setTasks([]);
  }, []);

  const deleteTask = useCallback(
    (id) => {
      setTasks(tasks.filter((t) => t.id !== id));
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (id, isDone) => {
      setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone } : t)));
    },
    [tasks],
  );

  const addTask = useCallback(() => {
    if (newTaskTitle.length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks((prev) => [...prev, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current?.focus();
    }
  }, [newTaskTitle]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current?.focus();
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        addTask,
        newTaskInputRef,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
