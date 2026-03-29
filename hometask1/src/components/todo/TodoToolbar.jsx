import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const TodoToolbar = ({ search, setSearch, status, setStatus, onOpenAdd }) => {
  return (
    <div className="mb-6 grid gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm md:grid-cols-3">
      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
      />

      <TextField
        select
        label="Filter by status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="active">Active</MenuItem>
      </TextField>

      <Button
        variant="contained"
        onClick={onOpenAdd}
        sx={{
          backgroundColor: "#ff3b3f",
          "&:hover": { backgroundColor: "#e43337" },
          height: "56px",
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default TodoToolbar;
