import localApi from "./local";
import serverApi from "./server";

const isLocal = import.meta.env.VITE_STATIC_BACKEND === "true";

const tasksApi = isLocal ? localApi : serverApi;

export default tasksApi;
