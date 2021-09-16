import './App.css';
import Info from "./Info.js";
function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}

function AddItem(){
  return(
    <form>
      <label for="text-form">Type Something</label>
      <input type="text" id="text-form" />
    </form>
  )
}
export default App;