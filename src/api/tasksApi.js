const URL = "http://localhost:3001/tasks";

const headers = {
  "Content-Type": "application/json",
};

const tasksApi = {
  getAll: () => fetch(URL).then((res) => res.json()),

  add: (task) =>
    fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(task),
    }).then((res) => res.json()),

  delete: (id) => fetch(`${URL}/${id}`, { method: "DELETE" }),

  deleteAll: (tasks) => Promise.all(tasks.map(({ id }) => tasksApi.delete(id))),

  toggleComplete: (id, isDone) =>
    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ isDone }),
    }),
};

export default tasksApi;
