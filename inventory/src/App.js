import './App.css';
import Info from "./Info.js";
function App() {
  return (
    <div className="App">
      <Info title="Inventory Manager"/>
      <AddItem text="tim" number={2}/>
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">{props.text}</label>
      <input type="text" id="text-form" />
    </form>
  );
}
//adding default props
AddItem.defaultProps = {
number: 1,
text: "default"
}
export default App;