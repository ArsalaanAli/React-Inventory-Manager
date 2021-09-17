import './App.css';
import SearchBar from "./SearchBar"
import { useState } from "react";

function App() {

  const [data, setData] = useState({});

  const updateData = (searchParam) => {
    setData(searchParam);
  }

  return (
    <div className="App">
      <SearchBar callBack={updateData} />
      <p>Name: {"name" in data ? data["name"] : "No Name"}</p>
      <p>Price: {"price" in data ? data["price"] : "No Price"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Type"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No Brand"}</p>
    </div>
  );
}


export default App;