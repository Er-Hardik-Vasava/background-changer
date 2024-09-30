import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}>
          <div className="flex flex-wrap justify-center text-2xl text-cyan-300 p-4 shadow-xl cursor-pointer hover:text-cyan-400">background<span className="text-white hover:text-cyan-100">Changer</span></div>
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 p-2 outline-2">
          <div className="flex flex-wrap justify-center shadow-lg p-4 rounded bg-white">
            <button
              onClick={() => setcolor("violet")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setcolor("indigo")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("green")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setcolor("yellow")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setcolor("orange")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setcolor("red")}
              className="outline-none px-4 py-1 m-1 rounded text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
