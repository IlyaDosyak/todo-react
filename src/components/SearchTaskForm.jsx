import { useContext } from "react";
import Field from "./Field";
import { TasksContext } from "../context/TasksContext";

const SearchTaskForm = () => {
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  return (
    <form className="todo__form" onSubmit={(e) => e.preventDefault()}>
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        value={searchQuery}
        onInput={({ target }) => setSearchQuery(target.value)}
      />
    </form>
  );
};

export default SearchTaskForm;
