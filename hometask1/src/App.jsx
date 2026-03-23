import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Same Doe" },
    { id: 3, name: "Kall Doe" },
    { id: 4, name: "Jonion Doe" },
  ]);

  const handleDelete = (id) => {
    const newUsers = users.filter((el) => el.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      <table>
        <thead>
          <tr className="border-b">
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => {
           return  <tr className="border-b" key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>
                <button
                  className="border rounded-lg px-3 py-1"
                  onClick={() => handleDelete(el.id)}
                >
                  delete
                </button>
                <button>Edit</button>
              </td>
            </tr>;  
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
