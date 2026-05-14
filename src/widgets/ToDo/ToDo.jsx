import ToDoInfo from "@/features/stats";
import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import { ToDoList } from "@/entities/todo";
import { useContext } from "react";
import Button from "@/shared/ui/Button";
import { TasksContext } from "@/entities/todo";
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

      <ToDoList styles={s} />
    </div>
  );
};

export default ToDo;
