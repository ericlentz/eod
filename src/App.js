import './App.css'
import EodItem from "./components/EodItem";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>End of Day</h1>
    </header>
    <ul>
      <EodItem item={"---- Confidential ----"}/>
      <EodItem item={"---- Confidential ----"}/>
      <EodItem item={"---- Confidential ----"}/>
      <EodItem item={"---- Confidential ----"}/>
    </ul>
  </div>
);

export default App
