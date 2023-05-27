import logo from "./logo.svg";
import "./App.css";
import PollDisplay from "./components/PollDisplay";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="App">
      <PollDisplay />
      {/* <Timer /> */}
    </div>
  );
}

export default App;
