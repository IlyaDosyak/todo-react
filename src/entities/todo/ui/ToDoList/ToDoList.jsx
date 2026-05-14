import { useContext } from "react";
import { TasksContext, ToDoItem } from "@/entities/todo";

const ToDoList = (props) => {
  const { styles } = props;

  const { tasks, filteredTasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks)
    return <div className={styles.emptyMessage}>There are no tasks yet</div>;

  if (isEmptyFilteredTasks && hasTasks)
    return <div className={styles.emptyMessage}>Tasks not found</div>;

  return (
    <ul className={`${styles.list}`}>
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem key={task.id} className={styles.item} {...task} />
      ))}
    </ul>
  );
};

export default ToDoList;
