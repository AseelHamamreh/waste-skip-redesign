import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SkipHolder from "./components/SkipHolder/SkipHolder";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <SkipHolder></SkipHolder>
    </>
  );
}

export default App;
