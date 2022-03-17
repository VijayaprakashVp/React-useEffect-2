import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [show, setShow] = useState(true);
  const [flag, setFlag] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  // console.log("end:", typeof end);
  // console.log("start:", typeof start);

  return (
    <div className="App">
      <input
        type="number"
        // value={start}
        placeholder="Start Time"
        onChange={(e) => {
          // console.log(typeof e.target.value);
          setStart(+e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        // value={end}
        placeholder="End Time"
        onChange={(e) => {
          setEnd(+e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Start
      </button>
      <br />
      {show && flag ? <Timer start={start} end={end} flag={flag} /> : ""}
      <br />
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
