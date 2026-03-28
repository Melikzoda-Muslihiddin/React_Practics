import React, { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  deleteTodo,
  toggleCompleted,
} from "../api/todos";

const About = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const loadTodos = async () => {
    const res = await getTodos();
    console.log("TODOS:", res);

    if (Array.isArray(res)) {
      setData(res);
    } else if (Array.isArray(res?.data)) {
      setData(res.data);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) return;

    await createTodo({
      name: name,
    });

    setName("");
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleToggle = async (id) => {
    await toggleCompleted(id);
    loadTodos();
  };

  return (
    <div className="max-w-[700px] mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter todo..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-3 rounded-md outline-none"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-5 rounded-md"
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {data.map((todo) => (
          <div
            key={todo.id}
            className="border rounded-md p-4 flex items-center justify-between"
          >
            <div>
              <p
                className={`text-lg font-medium ${
                  todo.isCompleted || todo.completed
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {todo.name || todo.title}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(todo.id)}
                className="bg-green-500 text-white px-3 py-2 rounded-md"
              >
                Completed
              </button>

              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-3 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
