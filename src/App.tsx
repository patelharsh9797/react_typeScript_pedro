import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <h1>Hello TypeScript</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default App;
