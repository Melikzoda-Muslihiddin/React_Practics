import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState(startForm);
  const getUsers = async () => {
    try {
      const { data } = await axios.get(API);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleOpenAddModal = () => {
    setFormData(startForm);
    setOpenAddModal(true);
  };
  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    setFormData(startForm);
  };
  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      age: user.age,
      job: user.job,
      status: user.status,
    });
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedUser(null);
    setFormData(startForm);
  };
  const handleOpenInfoModal = (user) => {
    setSelectedUser(user);
    setOpenInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setOpenInfoModal(false);
    setSelectedUser(null);
  };
  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleAddUser = async () => {
    try {
      if (
        !formData.name.trim() ||
        !String(formData.age).trim() ||
        !formData.job.trim()
      ) {
        return;
      }
      const newUser = {
        name: formData.name.trim(),
        age: Number(formData.age),
        job: formData.job.trim(),
        status: formData.status,
      };
      await axios.post(API, newUser);
      await getUsers();
      handleCloseAddModal();
    } catch (error) {
      console.error(error);
    }
  };
  const handleSaveEdit = async () => {
    try {
      if (
        !selectedUser ||
        !formData.name.trim() ||
        !String(formData.age).trim() ||
        !formData.job.trim()
      ) {
        return;
      }
      const updatedUser = {
        ...selectedUser,
        name: formData.name.trim(),
        age: Number(formData.age),
        job: formData.job.trim(),
        status: formData.status,
      };
      await axios.put(`${API}/${selectedUser.id}`, updatedUser);
      await getUsers();
      handleCloseEditModal();
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const handleIvazkadanStatus = async (user) => {
    try {
      await axios.patch(`${API}/${user.id}`, {
        status: !user.status,
      });
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const filterusers = useMemo(() => {
    return users.filter((user) => {
      const inpSearch = user.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "all" ? true : statusFilter === "active" ? user.status === true : user.status === false;
      return inpSearch && matchesStatus;
    });
  }, [users, search, statusFilter]);

  return (
    <Box sx={{ maxWidth: 1100, margin: "40px auto", px: 2 }}>
      <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            label="Search for name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
          />
          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel>Status Filter</InputLabel>
            <Select
              value={statusFilter}
              label="Status Filter"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleOpenAddModal}>
            Add User
          </Button>
        </Stack>
      </Paper>
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Status Control</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterusers.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.job}</TableCell>
                <TableCell>
                  <Chip
                    label={user.status ? "Active" : "Inactive"}
                    color={user.status ? "success" : "default"}
                    variant={user.status ? "filled" : "outlined"}
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={user.status}
                    onChange={() => handleIvazkadanStatus(user)}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleOpenInfoModal(user)}
                    >
                      Info
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleOpenEditModal(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"

                      color="error"
                      size="small"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={openAddModal}
        onClose={handleCloseAddModal}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => handleFormChange("name", e.target.value)}
              fullWidth
            />
            <TextField
              label="Age"
              value={formData.age}
              onChange={(e) => handleFormChange("age", e.target.value)}
              fullWidth
            />
            <TextField
              label="Job"
              value={formData.job}
              onChange={(e) => handleFormChange("job", e.target.value)}
              fullWidth
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography>Status:</Typography>
              <Checkbox
                checked={formData.status}
                onChange={(e) => handleFormChange("status", e.target.checked)}
              />
              <Typography>{formData.status ? "Active" : "Inactive"}</Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddModal}>Cancel</Button>
          <Button variant="contained" onClick={handleAddUser}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEditModal}
        onClose={handleCloseEditModal}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => handleFormChange("name", e.target.value)}
              fullWidth
            />
            <TextField
              label="Age"
              value={formData.age}
              onChange={(e) => handleFormChange("age", e.target.value)}
              fullWidth
            />
            <TextField
              label="Job"
              value={formData.job}
              onChange={(e) => handleFormChange("job", e.target.value)}
              fullWidth
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography>Status:</Typography>
              <Checkbox
                checked={formData.status}
                onChange={(e) => handleFormChange("status", e.target.checked)}
              />
              <Typography>{formData.status ? "Active" : "Inactive"}</Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openInfoModal}
        onClose={handleCloseInfoModal}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>User Info</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <Stack spacing={2} sx={{ mt: 1 }}>
              <Typography>
                <b>ID</b> {selectedUser.id}
              </Typography>
              <Typography>
                <b>Name</b> {selectedUser.name}
              </Typography>
              <Typography>
                <b>Age</b> {selectedUser.age}
              </Typography>
              <Typography>
                <b>Job</b> {selectedUser.job}
              </Typography>
              <Typography>
                <b>Status</b> {selectedUser.status ? "Active" : "Inactive"}
              </Typography>
            </Stack>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseInfoModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 

export default App;
    