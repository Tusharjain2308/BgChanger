import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [colortext, setColortext] = useState("");

  const handleChange = (newColor, colorName) => {
    setColor(newColor);
    setColortext(`This color is ${colorName}`);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex flex-col justify-center items-center"
        style={{ backgroundColor: color }}
      >
        {colortext && (
          <div
            className={`text-8xl font-bold text-center mb-20 ${
              color === "yellow" ? "text-black" : "text-white"
            }`}
          >
            {colortext}
          </div>
        )}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl rounded-3xl bg-white px-3 py-4">
            <button
              onClick={() => handleChange("red", "Red")}
              className="outline-3xl px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => handleChange("orange", "Orange")}
              className="outline-3xl px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => handleChange("black", "Black")}
              className="outline-3xl px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => handleChange("yellow", "Yellow")}
              className="outline-3xl px-4 py-1 rounded-full text-black"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => handleChange("green", "Green")}
              className="outline-3xl px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
