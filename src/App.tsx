import { useState } from "react";
import Graphics from "./pages/Graphics";

function App() {
  const [value, setValue] = useState(30);

  return (
    <>
      <div className="container">
        <button onClick={() => setValue(Math.floor(Math.random() * 50) + 1)}>
          Change Value to random number from 1 to 50
        </button>
      </div>
      <Graphics value={value} />
    </>
  );
}

export default App;
