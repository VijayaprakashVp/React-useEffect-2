import { useEffect, useState } from "react";

export function Timer({ start, end, flag }) {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev >= end) {
          clearInterval(id);
          return "Time Up";
        }
        return prev + 1;
      });
    }, 1000);
    // return () => {
    //   clearInterval(id);
    //   console.log("unmounted");
    // };
  }, []);
  return (
    <div>
      <h3>Start Timer : {start}</h3>
      <h3>End Timer : {end} </h3>
      <h1>Timer : {timer}</h1>
    </div>
  );
}
