import axios from "axios";

const api = axios.create({
  baseURL: "http://37.27.29.18:8001",
});

export const getTodos = async () => {
  const { data } = await api.get("/api/to-dos");
  return data;
};

export const getTodoById = async (id) => {
  const { data } = await api.get(`/api/to-dos/${id}`);
  return data;
};

export const createTodo = async (formData) => {
  const { data } = await api.post("/api/to-dos", formData);
  return data;
};

export const updateTodo = async (payload) => {
  const { data } = await api.put("/api/to-dos", payload);
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await api.delete(`/api/to-dos?id=${id}`);
  return data;
};

export const toggleCompleted = async (id) => {
  const { data } = await api.put(`/completed?id=${id}`);
  return data;
};

export const uploadTodoImages = async (todoId, formData) => {
  const { data } = await api.post(`/api/to-dos/${todoId}/images`, formData);
  return data;
};

export const deleteTodoImage = async (imageId) => {
  const { data } = await api.delete(`/api/to-dos/images/${imageId}`);
  return data;
};

export default api;
