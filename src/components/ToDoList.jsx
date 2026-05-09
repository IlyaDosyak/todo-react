import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const {
    className = "",
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;
  const hasTasks = tasks.length > 0;

  if (!hasTasks) return <div className="todo__empty-message"></div>;

  return (
    <ul className={`todo__list ${className}`}>
      {tasks.map((task) => (
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
