import { useState } from "react";
function MyComponent() {
  const [number, setNumber] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const addOne = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const minusOne = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };
  const reloadNum = () => {
    setNumber(0);
  };
  const toggleEmployed = () => {
    setIsEmployed(true);
  };

  return (
    <div className="plusMinus">
      <p>Number:{number}</p>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <button onClick={reloadNum}>C</button>
      <br />
      <p>Is employed:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployed}>Toggle Employed</button>
    </div>
  );
}
export default MyComponent;
