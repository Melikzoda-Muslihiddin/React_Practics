import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoToolbar from "../components/todo/TodoToolbar";
import TodoTable from "../components/todo/TodoTable";
import AddTodoModal from "../components/todo/AddTodoModal";
import EditTodoModal from "../components/todo/EditTodoModal";
import DeleteTodoModal from "../components/todo/DeleteTodoModal";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleCompleted,
} from "../api/todos";

const Todo = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [currentTodo, setCurrentTodo] = useState(null);

  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addFiles, setAddFiles] = useState([]);
  

  const loadTodos = async () => {
    try {
      setLoading(true);
      const res = await getTodos();

      if (Array.isArray(res)) {
        setTodos(res);
      } else if (Array.isArray(res?.data)) {
        setTodos(res.data);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error("LOAD TODOS ERROR:", error);
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const filteredTodos = useMemo(() => {
    let result = [...todos];

    if (search.trim()) {
      result = result.filter((todo) =>
        (todo.name || "").toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (status === "completed") {
      result = result.filter((todo) => todo.isCompleted);
    }

    if (status === "active") {
      result = result.filter((todo) => !todo.isCompleted);
    }

    return result;
  }, [todos, search, status]);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
    setAddName("");
    setAddDescription("");
    setAddFiles([]);
  };

  const handleOpenEdit = (todo) => {
    setCurrentTodo(todo);

    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setCurrentTodo(null);

  };

  const handleOpenDelete = (todo) => {
    setCurrentTodo(todo);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setCurrentTodo(null);
  };

  const handleInfo = (id) => {
    navigate(`/info/${id}`);
  };

  const handleAddSubmit = async () => {
    if (!addName.trim()) {
      alert("Name is required");
      return;
    }

    if (!addDescription.trim()) {
      alert("Description is required");
      return;
    }

    if (addFiles.length === 0) {
      alert("Choose at least one image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Name", addName);
      formData.append("Description", addDescription);

      addFiles.forEach((file) => {
        formData.append("Images", file);
      });

      const res = await createTodo(formData);
      console.log("CREATE TODO RESPONSE:", res);

      handleCloseAdd();
      await loadTodos();
    } catch (error) {
      console.error("CREATE TODO ERROR:", error);
      alert("Failed to create todo");
    }
  };

  const handleEditSubmit = async (values) => {
    if (!currentTodo) return;

    try {
      const payload = {
        id: currentTodo.id,
        name: values.name,
        description: values.description,
      };

      const res = await updateTodo(payload);
      console.log("UPDATE TODO RESPONSE:", res);

      handleCloseEdit();
      await loadTodos();
    } catch (error) {
      console.error("UPDATE TODO ERROR:", error);
      alert("Failed to update todo");
    }
  };

  const handleDeleteConfirm = async () => {
    if (!currentTodo) return;

    try {
      await deleteTodo(currentTodo.id);
      handleCloseDelete();
      await loadTodos();
    } catch (error) {
      console.error("DELETE TODO ERROR:", error);
      alert("Failed to delete todo");
    }
  };

  const handleCompleted = async (id) => {
    try {
      await toggleCompleted(id);
      await loadTodos();
    } catch (error) {
      console.error("TOGGLE COMPLETED ERROR:", error);
      alert("Failed to change completed status");
    }
  };

  return (
    <section className="mx-auto max-w-350 px-6 py-16">
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b3f]">
          Todo Page
        </p>

        <h1 className="text-4xl font-black uppercase md:text-6xl">
          Todo Management
        </h1>
      </div>

      <TodoToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onOpenAdd={handleOpenAdd}
      />

      {loading ? (
        <div className="rounded-xl bg-white p-10 text-center text-lg shadow-sm">
          Loading...
        </div>
      ) : (
        <TodoTable
          rows={filteredTodos}
          onInfo={handleInfo}
          onEdit={handleOpenEdit}
          onDelete={handleOpenDelete}
          onCompleted={handleCompleted}
        />
      )}

      <AddTodoModal
        open={openAdd}
        onClose={handleCloseAdd}
        addName={addName}
        setAddName={setAddName}
        addDescription={addDescription}
        setAddDescription={setAddDescription}
        addFiles={addFiles}
        setAddFiles={setAddFiles}
        onSubmit={handleAddSubmit}
      />

      <EditTodoModal
        open={openEdit}
        onClose={handleCloseEdit}
        currentTodo={currentTodo}
        onSubmit={handleEditSubmit}
      />

      <DeleteTodoModal
        open={openDelete}
        onClose={handleCloseDelete}
        onConfirm={handleDeleteConfirm}
        currentTodo={currentTodo}
      />
    </section>
  );
};

export default Todo;
