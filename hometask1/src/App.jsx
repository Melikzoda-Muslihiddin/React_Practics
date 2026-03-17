import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const initialUsers = [
  { id: 1, name: "Anushervon", age: 20, job: "mentor" },
  { id: 2, name: "Pahlavon", age: 18, job: "master" },
  { id: 3, name: "Serzod", age: 31, job: "developer" },
  { id: 4, name: "Daler", age: 23, job: "manager" },
  { id: 5, name: "Salimboy", age: 54, job: "director of corporation" },
  { id: 6, name: "Ali", age: 19, job: "designer" },
  { id: 7, name: "Karim", age: 27, job: "frontend developer" },
  { id: 8, name: "Zafar", age: 29, job: "backend developer" },
  { id: 9, name: "Muhammad", age: 22, job: "student" },
  { id: 10, name: "Rustam", age: 35, job: "team lead" },
  { id: 11, name: "Siroj", age: 24, job: "qa engineer" },
  { id: 12, name: "Jamshid", age: 30, job: "devops" },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleAddUser = () => {
    if (!name.trim() || !age.trim() || !job.trim()) return;

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      age: Number(age),
      job: job.trim(),
    };

    setUsers([...users, newUser]);
    setName("");
    setAge("");
    setJob("");
  };

  const handleEdit = (id) => {
    alert(`Edit user with id: ${id}`);
  };

  return (
    <Box sx={{ maxWidth: 900, margin: "40px auto" }}>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: 250 }}
          />
          <TextField
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ width: 200 }}
          />
          <TextField
            label="Job"
            variant="outlined"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            sx={{ width: 250 }}
          />
          <Button variant="contained" onClick={handleAddUser}>
            Add User
          </Button>
        </Stack>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.job}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(user.id)}
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
    </Box>
  );
};

export default App;
