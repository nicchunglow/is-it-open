import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Collection from "./Containers/Collection";
import HeaderBar from "./Components/HeaderBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <span className="Logo-tag">
            <h1>Is it Open?</h1>
          </span>
          <div>
            <HeaderBar />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/yourcollection"
              component={Collection}
            />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
