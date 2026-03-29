import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditTodoModal = ({ open, onClose, currentTodo, onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (open && currentTodo) {
      setName(currentTodo.name || "");
      setDescription(currentTodo.description || "");
    }
  }, [open, currentTodo]);

  const handleSave = () => {
    onSubmit({
      name,
      description,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Todo</DialogTitle>

      <DialogContent className="pt-3!">
        <div className="flex flex-col gap-4">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            backgroundColor: "#ff3b3f",
            "&:hover": { backgroundColor: "#e43337" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoModal;
