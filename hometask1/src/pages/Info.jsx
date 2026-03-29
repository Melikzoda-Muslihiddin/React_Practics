import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoDetails from "../components/info/InfoDetails";
import InfoGallery from "../components/info/InfoGallery";
import UploadImageForm from "../components/info/UploadImageForm";
import { getTodoById, uploadTodoImages, deleteTodoImage } from "../api/todos";

const normalizeTodo = (res) => {
  if (!res) return null;

  if (res?.data && !Array.isArray(res.data)) {
    return res.data;
  }

  if (Array.isArray(res?.data) && res.data.length > 0) {
    return res.data[0];
  }

  if (res?.id) {
    return res;
  }

  return null;
};

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingImageId, setDeletingImageId] = useState(null);

  const loadTodo = async () => {
    try {
      setLoading(true);
      const res = await getTodoById(id);
      const normalized = normalizeTodo(res);
      setTodo(normalized);
      console.log("GET TODO BY ID RESPONSE:", res);
    } catch (error) {
      console.error("GET TODO BY ID ERROR:", error);
      setTodo(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodo();
  }, [id]);

  const handleUploadImages = async (files) => {
    try {
      setUploading(true);

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("Images", file);
      });

      const res = await uploadTodoImages(id, formData);
      console.log("UPLOAD IMAGES RESPONSE:", res);

      await loadTodo();
    } catch (error) {
      console.error("UPLOAD IMAGES ERROR:", error);
      alert("Failed to upload images");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageId) => {
    try {
      setDeletingImageId(imageId);
      const res = await deleteTodoImage(imageId);
      console.log("DELETE IMAGE RESPONSE:", res);
      await loadTodo();
    } catch (error) {
      console.error("DELETE IMAGE ERROR:", error);
      alert("Failed to delete image");
    } finally {
      setDeletingImageId(null);
    }
  };

  return (
    <section className="mx-auto max-w-350 px-6 py-16">
      <div className="mb-8">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/todo")}
          sx={{
            borderColor: "rgba(0,0,0,0.15)",
            color: "#111",
          }}
        >
          Back to Todo
        </Button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-black/10 bg-white p-10 text-center text-lg shadow-sm">
          Loading todo details...
        </div>
      ) : todo ? (
        <div className="grid gap-6 xl:grid-cols-[1fr_1.1fr]">
          <div className="flex min-w-0 flex-col gap-6">
            <InfoDetails todo={todo} />
            <UploadImageForm
              onUpload={handleUploadImages}
              loading={uploading}
            />
          </div>

          <div className="min-w-0">
            <InfoGallery
              images={todo.images || []}
              onDeleteImage={handleDeleteImage}
              deletingImageId={deletingImageId}
            />
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-black/10 bg-white p-10 text-center shadow-sm">
          <h2 className="mb-3 text-3xl font-black uppercase">Todo not found</h2>
          <p className="mb-6 text-black/70">
            We could not load this todo item.
          </p>
          <Button
            variant="contained"
            onClick={() => navigate("/todo")}
            sx={{
              backgroundColor: "#ff3b3f",
              "&:hover": { backgroundColor: "#e43337" },
            }}
          >
            Go back
          </Button>
        </div>
      )}
    </section>
  );
};

export default Info;
