import { useState, useRef } from "react";

export default function Ref() {
  let x = 0; //local variable
  const [y, setY] = useState(0); //state variable
  const z = useRef(0); //reference variable = which is an object

  function handleX() {
    x += 1;
    console.log("X=", x);
  }

  function handleY() {
    setY(y + 1);
    console.log("Y=", y);
  }

  function handleZ() {
    z.current = z.current + 1;
    console.log(z);
  }

  return (
    <>
      <div className="bg-red-400 border-2">
        <h1>Ref Component</h1>

        <h1 className="font-bold">X: {x}</h1>

        <button className="border-4 bg-gray-200" onClick={handleX}>
          Increase X
        </button>

        <h1 className="font-bold">Y: {y}</h1>

        <button className="border-4 bg-gray-200" onClick={handleY}>
          Increase Y
        </button>

        <h1 className="font-bold">Z: {z.current}</h1>

        <button className="border-4 bg-gray-200" onClick={handleZ}>
          Increase Z
        </button>
      </div>
    </>
  );
}
