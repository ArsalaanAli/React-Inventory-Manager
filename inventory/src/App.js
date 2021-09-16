import './App.css';
import Info from "./Info.js";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Info title="Inventory Manager" />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitle = () => {
    setTitle("this is title");
  }
  const updateCounter = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Data title={title} count={ count }/>
      <button onClick={ updateTitle }>Update Title</button>
      <button onClick={ updateCounter }>Update Counter</button>
    </div>
  )
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Counter: {props.count}</p>
    </div>
  )
}

export default App;