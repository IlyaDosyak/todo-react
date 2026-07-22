const URL = "http://localhost:3001/tasks";

const headers = {
  "Content-Type": "application/json",
};

const serverApi = {
  getAll: () => fetch(URL).then((res) => res.json()),

  getById: (id) => fetch(`${URL}/${id}`).then((res) => res.json()),
  add: (task) =>
    fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(task),
    }).then((res) => res.json()),

  delete: (id) => fetch(`${URL}/${id}`, { method: "DELETE" }),

  deleteAll: (tasks) => Promise.all(tasks.map(({ id }) => serverApi.delete(id))),

  toggleComplete: (id, isDone) =>
    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ isDone }),
    }),
};

export default serverApi;
