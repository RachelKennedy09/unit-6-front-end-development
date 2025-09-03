import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import './components/Card.css'; // Import component-level CSS


function App() {
  return (
    <div className="App">
      <h1>React CSS Examples</h1>

      <Button onClick={() => alert("Button clicked!")}>Click me</Button>

      <Card title="Example Card" content="This is an example card component." />
      <Card2/>

      <p className="app-text">This is text styled by index.css</p>
    </div>
  );
}

export default App;