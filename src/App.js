import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
