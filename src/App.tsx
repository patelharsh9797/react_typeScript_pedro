import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReduxToolkit from "./pages/ReduxToolkit";
// import People, { Country } from "./components/People";

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <Router>
      <div className="App">
        <h1>Hello TypeScript</h1>

        {/* <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button> */}

        {/* <People
        name="Harsh Patel"
        email="email_hi_he@gmail.com"
        // age={"Kaya karega janke"}
        age={69}
        // isMarried={"single hu bhai :)"}
        isMarried={false}
        friends={["ADSH", "Baki to koi nahi he kaas"]}
        country={Country.India}
        /> */}

        {/* Redux Toolkit */}
        <ReduxToolkit />
      </div>
    </Router>
  );
}

export default App;
