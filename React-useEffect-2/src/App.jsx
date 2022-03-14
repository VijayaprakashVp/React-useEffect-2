import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Timer /> : ""}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show Timer" : "Hide Timer"}
      </button>
    </div>
  );
}

export default App;
