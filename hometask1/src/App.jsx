import { useState } from "react";

function App() {
  let [srch, setsrch] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "CR7",
      job: "Senior",
      status: true,
    },
    {
      id: 2,
      name: "Karim Benzama",
      job: "Junior",
      status: false,
    },
    {
      id: 3,
      name: "Bonuchi",
      job: "middle",
      status: true,
    },
    {
      id: 4,
      name: "Maykl Jordan",
      job: "Biginer",
      status: false,
    },
    {
      id: 5,
      name: "Garet Bale",
      job: "Teacher",
      status: true,
    }
  ]);

  const addUser = (event) => {
    event.preventDefault();
    let obj = {
      id: Date.now(),
      name: event.target["name"].value,
      job: event.target["job"].value,
      status: event.target["status"].value == "true",
    };
    setData([...data, obj]);
    event.target.reset();
  };

  const delet = (id) => {
    setData(data.filter((el) => el.id !== id));
  };
  const cheked = (id) => {
    setData(
      data.map((el) => (el.id === id ? { ...el, status: !el.status } : el)),
    );
  };

  const filterData = data.filter((el) =>
    el.name.toLowerCase().includes(srch.toUpperCase()),
  );

  return (
    <>
      <form onSubmit={addUser} className="w-[60%] m-auto mt-[20px]" action="">
        <div className="flex gap-[30px]">
          <input
            className="border border-gray-400 w-[220px] rounded-[6px] pl-[20px] outline-none"
            type="text"
            placeholder="Search by name..."
            value={srch}
            onChange={(el) => setsrch(el.target.value)}
            name=""
          />
          <input
            className="border border-gray-400 w-[220px] rounded-[6px] pl-[20px] outline-none"
            name="name"
            type="text"
            placeholder="Enter your name..."
            requiredC
          />
          <input
            className="border border-gray-400 w-[220px] rounded-[6px] pl-[20px] outline-none"
            name="job"
            type="text"
            placeholder="Enter your job..."
            required
          />
          <select
            className="border border-gray-400 w-[120px] rounded-[6px] pl-[20px] outline-none"
            name="status"
            id=""
          >
            <option className="" value="true">
              Active
            </option>
            <option value="false">Inactive</option>
          </select>
          <button
            className="border  border-gray-400 w-[120px] rounded-[6px] pl-[20px] bg-indigo-800 text-white hover:bg-indigo-300 hover:text-black"
            type="submit"
          >
            +Add
          </button>
        </div>
      </form>
      <table className="text-center  w-[80%] m-auto rounded-[40px] mt-[20px]">
        <thead>
          <tr className="border bg-black text-white h-[40px] rounded-[30px]">
            <th>Name</th>
            <th>job</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((el) => el.name.toLowerCase().includes(srch.toLowerCase()))
            .map((el, i) => {
              return (
                <tr key={el.id}>
                  <td className="bg-blue-300 text-black hover:bg-blue-500">
                    {el.name}
                  </td>
                  <td className="bg-blue-300 text-black hover:bg-blue-500">
                    {el.job}
                  </td>
                  <td className="bg-blue-300 tblack hover:bg-blue-500">
                    {el.status ? "Active" : "Inactive"}
                  </td>
                  <td className="border bg-blue-300 text-white">
                    <button
                      className="border w-[46%] hover:bg-gray-800 hover:text-white active:bg-red-500 active: text-black"
                      onClick={() => delet(el.id)}
                    >
                      🗑️
                    </button>
                    <button className="border w-[46%] hover:bg-gray-800 hover:text-white active:bg-red-500 active: text-black">
                      ✏️
                    </button>
                    <input
                      checked={el.status}
                      onChange={() => cheked(el.id)}
                      type="checkbox"
                      className="w-[30px] h-[100%] m-4"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
} 

export default App;
