import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const {
    className = "",
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
    filteredTasks,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks)
    return <div className="todo__empty-message">There are no tasks yet</div>;

  if (isEmptyFilteredTasks && hasTasks)
    return <div className="todo__empty-message">Tasks not found</div>

  return (
    <ul className={`todo__list ${className}`}>
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem
          key={task.id}
          className="todo__item"
          {...task}
          onDeleteButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
