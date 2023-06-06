import './App.css'
import EodItem from "./components/EodItem";

const App = () => {
  const eodHistory = [
    {
      date: new Date(2023, 5, 5),
      tasks: [
        {task: "---- Confidential ----"},
        {task: "---- Confidential ----"},
      ]
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>End of Day</h1>
      </header>
      <ul>
        <EodItem item={eodHistory[0].tasks[0]}/>
        <EodItem item={eodHistory[0].tasks[1]}/>
      </ul>
    </div>
  )
};

export default App
