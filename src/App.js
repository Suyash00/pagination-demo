import { useEffect, useState } from "react";
import { Pagination, DataTable } from "./Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // useEffect(() => {
  //    axios
  //     .get(
  //       "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  //     )
  //     .then((response) => {
  //       setItems(response.data);
  //     })
  //     .catch((error) => {
  //       alert("failed to fetch data");
  //     });
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setItems(response.data);
    } catch (error) {
      alert("failed to fetch data");
    }
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <DataTable currentItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
