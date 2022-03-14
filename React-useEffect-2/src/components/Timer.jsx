import { useEffect, useState } from "react";

export function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("unmounted");
    };
  }, []);
  return (
    <div>
      <h3>Start Timer : 0</h3>
      <h3>End Timer : 0 </h3>
      <h1>Timer : {timer}</h1>
    </div>
  );
}
