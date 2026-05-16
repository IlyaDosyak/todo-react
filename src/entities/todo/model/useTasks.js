import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import tasksApi from "@/shared/api/tasks";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL": {
      return Array.isArray(action.tasks) ? action.tasks : state;
    }
    case "ADD": {
      return [...state, action.task];
    }
    case "TOGGLE_COMPLETE": {
      const { id, isDone } = action;

      return state.map((task) => {
        return task.id === id ? { ...task, isDone } : task;
      });
    }
    case "DELETE": {
      return state.filter((task) => task.id !== action.id);
    }
    case "DELETE_ALL": {
      return [];
    }
    default: {
      return state;
    }
  }
};

const useTasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [disappearingTaskId, setDisappearingTaskId] = useState(null);
  const [appearingTaskId, setAppearingTaskId] = useState(null);

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (isConfirmed) {
      tasksApi.deleteAll(tasks).then(() => dispatch({ type: "DELETE_ALL" }));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (id) => {
      tasksApi.delete(id).then(() => {
        setDisappearingTaskId(id);
        setTimeout(() => {
          dispatch({ type: "DELETE", id });
          setDisappearingTaskId(null);
        }, 400);
      });
    },

    [],
  );

  const toggleTaskComplete = useCallback((id, isDone) => {
    tasksApi
      .toggleComplete(id, isDone)
      .then(() => dispatch({ type: "TOGGLE_COMPLETE", id, isDone }));
  }, []);

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };

    tasksApi.add(newTask).then((addedTask) => {
      dispatch({ type: "ADD", task: addedTask });
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current?.focus();
      setAppearingTaskId(addedTask.id);
      setTimeout(() => {
        setAppearingTaskId(null);
      }, 400);
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current?.focus();

    tasksApi
      .getAll()
      .then((serverTasks) => dispatch({ type: "SET_ALL", tasks: serverTasks }));
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
    disappearingTaskId,
    appearingTaskId,
  };
};

export default useTasks;
