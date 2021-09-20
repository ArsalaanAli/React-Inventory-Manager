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
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <ItemsDisplay items={data.items} />
      <AddItem addItem={addItemToData} />
    </div>
  );
}

export default App;
