import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const DeleteTodoModal = ({ open, onClose, onConfirm, currentTodo }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Delete Todo</DialogTitle>

      <DialogContent>
        <p className="text-black/80">
          Are you sure you want to delete{" "}
          <span className="font-semibold">
            {currentTodo?.name || "this todo"}
          </span>
          ?
        </p>
        <p className="mt-2 text-sm text-red-500">
          This action cannot be undone.
        </p>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" variant="contained" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTodoModal;
