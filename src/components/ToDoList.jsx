import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TasksContext } from "../context/TasksContext";

const ToDoList = (props) => {
  const { className = "" } = props;

  const { tasks, filteredTasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks)
    return <div className="todo__empty-message">There are no tasks yet</div>;

  if (isEmptyFilteredTasks && hasTasks)
    return <div className="todo__empty-message">Tasks not found</div>;

  return (
    <ul className={`todo__list ${className}`}>
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem key={task.id} className="todo__item" {...task} />
      ))}
    </ul>
  );
};

export default ToDoList;
