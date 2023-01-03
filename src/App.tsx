import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const squares = useRef<HTMLDivElement>(null);
  const eyeball = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      (squares.current as HTMLDivElement).style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      (eyeball.current as HTMLDivElement).style.transform =
        "translate(" + posX * 0.08 + "%, " + posY * 0.08 + "%)";
    });
  }, [squares, eyeball]);

  return (
    <div className="App">
      <div id="container">
        <div ref={squares} id="square1">
          <div ref={eyeball} className="eyeball" id="eyeball"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
