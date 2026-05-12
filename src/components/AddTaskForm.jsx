import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  // const { addTask, newTaskTitle, setNewTaskTitle } = props;
  const { addTask, newTaskInputRef } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task"
        // value={newTaskTitle}
        // onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
