import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({ name: name, brand: brand, type: type, price: price });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div>
      <h2>Add an Item</h2>
      <form>
        <label for="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label for="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label for="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label for="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></input>
        <button type="button" onClick={addItemButtonPressed}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;