import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParam) => {
    setFilters(searchParam);
  };

  const addItemToData = (item) => {
    let currentData = data["items"];
    item.id = currentData.length;
    currentData.push(item);
    setData({ items: currentData });
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={data.items} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
