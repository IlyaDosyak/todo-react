import ToDoInfo from "../ToDoInfo/ToDoInfo";
import ToDoList from "../ToDoList/ToDoList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import { useContext } from "react";
import Button from "../Button/Button";
import { TasksContext } from "../../context/TasksContext";
import s from "./ToDo.module.scss";

const ToDo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={s.todo}>
      <h1 className={s.title}>To Do List</h1>
      <AddTaskForm styles={s} />
      <SearchTaskForm styles={s} />
      <ToDoInfo styles={s} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first incomplete task
      </Button>

      <ToDoList styles={s}/>
    </div>
  );
};

export default ToDo;
