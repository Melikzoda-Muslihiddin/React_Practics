import axios from "axios";

const api = axios.create({
  baseURL: "http://37.27.29.18:8001",
});

export const getTodos = async () => {
  try {
    const { data } = await api.get("/api/to-dos");
    return data;
  } catch (error) {
    console.error("GET TODOS ERROR:", error);
    return [];
  }
};

export const getTodoById = async (id) => {
  try {
    const { data } = await api.get(`/api/to-dos/${id}`);
    return data;
  } catch (error) {
    console.error("GET TODO BY ID ERROR:", error);
    return null;
  }
};

export const createTodo = async (todo) => {
  try {
    const { data } = await api.post("/api/to-dos", todo);
    return data;
  } catch (error) {
    console.error("CREATE TODO ERROR:", error);
    return null;
  }
};

export const updateTodo = async (todo) => {
  try {
    const { data } = await api.put("/api/to-dos", todo);
    return data;
  } catch (error) {
    console.error("UPDATE TODO ERROR:", error);
    return null;
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await api.delete(`/api/to-dos?id=${id}`);
    return data;
  } catch (error) {
    console.error("DELETE TODO ERROR:", error);
    return null;
  }
};

export const toggleCompleted = async (id) => {
  try {
    const { data } = await api.put(`/completed?id=${id}`);
    return data;
  } catch (error) {
    console.error("TOGGLE COMPLETED ERROR:", error);
    return null;
  }
};
