import Chip from "@mui/material/Chip";

const TodoStatusChip = ({ isCompleted }) => {
  return isCompleted ? (
    <Chip label="Completed" color="success" variant="filled" />
  ) : (
    <Chip label="Active" color="warning" variant="filled" />
  );
};

export default TodoStatusChip;
