import Field from "./Field";
import Button from "./Button";

const AddTaskForm = () => {
  return (
    <form className="todo__form">
      <Field className="todo__field" id="new-task" label="New task" />
      <Button />
    </form>
  );
};

export default AddTaskForm;
