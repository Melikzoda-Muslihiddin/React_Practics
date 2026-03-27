import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const api = "http://37.27.29.18:8001/api/categories";
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(api);
      console.log("GET RESPONSE:", res.data);

      if (Array.isArray(res.data)) {
        setData(res.data);
      } else if (Array.isArray(res.data.data)) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addData(obj) {
    try {
      await axios.post(api, obj);
      getData();
    } catch (error) {
      console.error("ADD ERROR:", error.response?.data || error.message);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      categoryName: event.target.name.value,
    };

    addData(obj);
    event.target.reset();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>

      {Array.isArray(data) &&
        data.map((item) => (
          <div key={item.id}>{item.categoryName || item.name}</div>
        ))}
    </div>
  );
};

export default About;
