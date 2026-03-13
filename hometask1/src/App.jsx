import React, { useState } from "react";

const App = () => {
  const [status, setStatus] = useState(false);
  const [idx, setIdx] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState(""); // Состояние для поиска

  const [data, setData] = useState([
    { status: false, name: "Anita Beahan", age: 94, id: 1 },
    { status: true, name: "Francis Mante", age: 7, id: 2 },
    { status: false, name: "June Oberbrunner", age: 64, id: 3 },
    { status: true, name: "Teri Stokes", age: 6, id: 4 },
    { status: false, name: "Gordon Macejkovic", age: 98, id: 5 },
    { status: true, name: "Evan Hilll", age: 97, id: 6 },
    { status: false, name: "Gretchen Rice V", age: 48, id: 7 },
  ]);

  // Фильтрация данных для поиска
  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (idx === null) return; // Если ничего не редактируем, выходим

    const updatedData = data.map((el) =>
      el.id === idx ? { ...el, name, age: Number(age), status } : el,
    );

    setData(updatedData);

    // Очистка полей
    setName("");
    setAge("");
    setIdx(null);
  };

  const deleteUser = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  const showEdit = (el) => {
    setName(el.name);
    setAge(el.age);
    setIdx(el.id);
    setStatus(el.status);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Поиск */}
        <input
          type="search"
          placeholder="Search by name..."
          className="w-full p-2 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Форма редактирования */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 bg-white p-4 rounded-xl shadow-md"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
            className="border p-2 rounded-lg flex-1"
          />
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Age"
            value={age}
            className="border p-2 rounded-lg w-24"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </form>

        {/* Таблица */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border-b">#</th>
                <th className="p-4 border-b">Name</th>
                <th className="p-4 border-b">Age</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((el, i) => (
                <tr
                  key={el.id}
                  className="hover:bg-gray-50 border-b last:border-0"
                >
                  <td className="p-4 text-gray-500">{i + 1}</td>
                  <td className="p-4 font-medium">{el.name}</td>
                  <td className="p-4 text-gray-600">{el.age}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${el.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {el.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-4 flex justify-center gap-2">
                    <button
                      onClick={() => deleteUser(el.id)}
                      className="p-2 hover:bg-red-50 rounded-full text-red-500"
                    >
                      🗑️
                    </button>
                    <button
                      onClick={() => showEdit(el)}
                      className="p-2 hover:bg-blue-50 rounded-full text-blue-500"
                    >
                      ✒️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
    