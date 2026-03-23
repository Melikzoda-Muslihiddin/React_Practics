import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Chip,
} from "@mui/material";

const API = "http://localhost:3001/users";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
const API = "http://localhost:3001/users";
const startForm = {
  name: "",
  age: "",
  job: "",
  status: true,
};
const App = () => {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const [addForm, setAddForm] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    status: true,
    avatar: "",
  });

  const [editForm, setEditForm] = useState({
    id: null,
    name: "",
    email: "",
    age: "",
    city: "",
    status: true,
    avatar: "",
  });

  const [infoUser, setInfoUser] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(API);
      setUsers(data);
    } catch (error) {
      console.error("Get users error:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAdd = async () => {
    if (
      !addForm.name.trim() ||
      !addForm.email.trim() ||
      !addForm.age ||
      !addForm.city.trim() ||
      !addForm.avatar.trim()
    ) {
      return;
    }

    try {
      await axios.post(API, {
        ...addForm,
        age: Number(addForm.age),
      });

      setAddForm({
        name: "",
        email: "",
        age: "",
        city: "",
        status: true,
        avatar: "",
      });

      setOpenAdd(false);
      getUsers();
    } catch (error) {
      console.error("Add user error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getUsers();
    } catch (error) {
      console.error("Delete user error:", error);
    }
  };

  const openEditDialog = (user) => {
    setEditForm({
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      city: user.city,
      status: user.status,
      avatar: user.avatar,
    });
    setOpenEdit(true);
  };

  const handleEdit = async () => {
    if (
      !editForm.name.trim() ||
      !editForm.email.trim() ||
      !editForm.age ||
      !editForm.city.trim() ||
      !editForm.avatar.trim()
    ) {
      return;
    }

    try {
      await axios.put(`${API}/${editForm.id}`, {
        ...editForm,
        age: Number(editForm.age),
      });

      setOpenEdit(false);
      getUsers();
    } catch (error) {
      console.error("Edit user error:", error);
    }
  };

  const handleOpenInfo = (user) => {
    setInfoUser(user);
    setOpenInfo(true);
  };

  const handleToggleStatus = async (user) => {
    try {
      await axios.patch(`${API}/${user.id}`, {
        status: !user.status,
      });
      getUsers();
    } catch (error) {
      console.error("Toggle status error:", error);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const text = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(text) ||
        user.email.toLowerCase().includes(text) ||
        user.city.toLowerCase().includes(text);

      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "active"
            ? user.status === true
            : user.status === false;

      return matchesSearch && matchesStatus;
    });
  }, [users, search, statusFilter]);

  return (
    <Box sx={{ p: 4, bgcolor: "#f6f8fb", minHeight: "100vh" }}>
      <Paper sx={{ p: 3, maxWidth: 1200, mx: "auto", borderRadius: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", md: "center" }}
          mb={3}
        >
          <Typography variant="h4" fontWeight="bold">
            Users CRUD
          </Typography>

          <Button variant="contained" onClick={() => setOpenAdd(true)}>
            Add User
          </Button>
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={3}>
          <TextField
            fullWidth
            label="Search by name, email, city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel>Status filter</InputLabel>
            <Select
              value={statusFilter}
              label="Status filter"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Status Control</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>

                  <TableCell>
                    <Avatar src={user.avatar} alt={user.name} />
                  </TableCell>

                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.city}</TableCell>

                  <TableCell>
                    {user.status ? (
                      <Chip label="Active" color="success" />
                    ) : (
                      <Chip label="Inactive" color="default" />
                    )}
                  </TableCell>

                  <TableCell>
                    <Checkbox
                      checked={user.status}
                      onChange={() => handleToggleStatus(user)}
                    />
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handleOpenInfo(user)}
                      >
                        Info
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => openEditDialog(user)}
                      >
                        Edit
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}

              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog open={openAdd} onClose={() => setOpenAdd(false)} fullWidth>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Name"
              value={addForm.name}
              onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
            />

            <TextField
              label="Email"
              value={addForm.email}
              onChange={(e) =>
                setAddForm({ ...addForm, email: e.target.value })
              }
            />

            <TextField
              label="Age"
              type="number"
              value={addForm.age}
              onChange={(e) => setAddForm({ ...addForm, age: e.target.value })}
            />

            <TextField
              label="City"
              value={addForm.city}
              onChange={(e) => setAddForm({ ...addForm, city: e.target.value })}
            />

            <TextField
              label="Avatar URL"
              value={addForm.avatar}
              onChange={(e) =>
                setAddForm({ ...addForm, avatar: e.target.value })
              }
            />

            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={String(addForm.status)}
                label="Status"
                onChange={(e) =>
                  setAddForm({
                    ...addForm,
                    status: e.target.value === "true",
                  })
                }
              >
                <MenuItem value="true">Active</MenuItem>
                <MenuItem value="false">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Name"
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
            />

            <TextField
              label="Email"
              value={editForm.email}
              onChange={(e) =>
                setEditForm({ ...editForm, email: e.target.value })
              }
            />

            <TextField
              label="Age"
              type="number"
              value={editForm.age}
              onChange={(e) =>
                setEditForm({ ...editForm, age: e.target.value })
              }
            />

            <TextField
              label="City"
              value={editForm.city}
              onChange={(e) =>
                setEditForm({ ...editForm, city: e.target.value })
              }
            />

            <TextField
              label="Avatar URL"
              value={editForm.avatar}
              onChange={(e) =>
                setEditForm({ ...editForm, avatar: e.target.value })
              }
            />

            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={String(editForm.status)}
                label="Status"
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    status: e.target.value === "true",
                  })
                }
              >
                <MenuItem value="true">Active</MenuItem>
                <MenuItem value="false">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEdit}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openInfo} onClose={() => setOpenInfo(false)} fullWidth>
        <DialogTitle>User Info</DialogTitle>
        <DialogContent>
          {infoUser && (
            <Stack spacing={2} alignItems="center" mt={1}>
              <Avatar
                src={infoUser.avatar}
                alt={infoUser.name}
                sx={{ width: 90, height: 90 }}
              />

              <Typography variant="h6">{infoUser.name}</Typography>
              <Typography>Email: {infoUser.email}</Typography>
              <Typography>Age: {infoUser.age}</Typography>
              <Typography>City: {infoUser.city}</Typography>
              <Typography>
                Status: {infoUser.status ? "Active" : "Inactive"}
              </Typography>
            </Stack>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenInfo(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 

export default App;
    