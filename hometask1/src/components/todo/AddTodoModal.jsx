import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTodoModal = ({
  open,
  onClose,
  addName,
  setAddName,
  addDescription,
  setAddDescription,
  addFiles,
  setAddFiles,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Todo</DialogTitle>

      <DialogContent className="pt-3!">
        <div className="flex flex-col gap-4">
          <TextField
            label="Name"
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
            fullWidth
          />

          <TextField
            label="Description"
            value={addDescription}
            onChange={(e) => setAddDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black/70">
              Upload image
            </label>

            <input
              type="file"
              multiple
              onChange={(e) => setAddFiles(Array.from(e.target.files || []))}
            />

            {addFiles.length > 0 && (
              <p className="text-sm text-black/60">
                Selected files: {addFiles.length}
              </p>
            )}
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{
            backgroundColor: "#ff3b3f",
            "&:hover": { backgroundColor: "#e43337" },
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoModal;
