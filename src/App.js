import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Collection from "./Containers/Collection";
import HeaderBar from "./Components/HeaderBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <span className="Logo-tag">
            <h1>Is it Open?</h1>
          </span>
          <div>
            <HeaderBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/collections" component={Collection} />
            <Route exact path="/users/register" component={Register} />
            <Route exact path="/users/login" component={Login} />
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
