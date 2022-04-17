import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Helloooo</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cv">cv</Link>
        <Link to="/projects">projects</Link>
      </nav>
    </div>
  );
}

export default App;
