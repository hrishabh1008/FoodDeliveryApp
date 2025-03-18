import { useMemo, useState } from "react";
import { nthPrime } from "../utils/PrimeNum";

export default function Memo() {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  const lastPrime = useMemo(() => nthPrime(number), [number]);

  return (
    <>
      <div
        style={
          isDarkTheme
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "pink" }
        }
      >
        <h1>MEMO COMPONENT</h1>
        <button
          className="border bg-blue-300"
          onClick={() => setisDarkTheme(!isDarkTheme)}
        >
          Toggle Theme
        </button>
        <div className="border-8">
          <input
            type="text"
            className="bg-amber-200 border-8 "
            onChange={(e) => setNumber(e.target.value)}
          />
          <h2 className="text-5xl">
            lastPrime == {lastPrime}
            {console.log(lastPrime)}
          </h2>
        </div>
      </div>
    </>
  );
}
