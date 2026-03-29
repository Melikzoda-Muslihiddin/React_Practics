import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TodoStatusChip from "./TodoStatusChip";
import { getImageUrl } from "../../utils/getImageUrl";  

const TodoTable = ({ rows, onInfo, onEdit, onDelete, onCompleted }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Preview</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((todo) => {
              const firstImage = todo?.images?.[0]?.imageName;

              return (
                <TableRow key={todo.id} hover>
                  <TableCell>
                    <img
                      src={getImageUrl(firstImage)}
                      alt={todo.name}
                      className="h-15 w-20 rounded-lg object-cover border border-black/10"
                    />
                  </TableCell>

                  <TableCell className="font-semibold!">{todo.name}</TableCell>

                  <TableCell>
                    <div className="max-w-65 truncate">
                      {todo.description}
                    </div>
                  </TableCell>

                  <TableCell>
                    <TodoStatusChip isCompleted={todo.isCompleted} />
                  </TableCell>

                  <TableCell align="center">
                    <div className="flex items-center justify-center gap-1">
                      <Tooltip title="Info">
                        <IconButton onClick={() => onInfo(todo.id)}>
                          <InfoOutlinedIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <IconButton onClick={() => onEdit(todo)}>
                          <EditOutlinedIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton onClick={() => onDelete(todo)}>
                          <DeleteOutlineOutlinedIcon color="error" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Completed">
                        <IconButton onClick={() => onCompleted(todo.id)}>
                          <CheckCircleOutlineOutlinedIcon color="success" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <div className="py-10 text-black/60">No todos found</div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoTable;
