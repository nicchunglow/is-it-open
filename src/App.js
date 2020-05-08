import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Collection from "./Containers/Collection";
import HeaderBar from "./Components/HeaderBar";
import { Divider } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <Divider hidden />
            <Divider hidden />
            <HeaderBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/users/collections" component={Collection} />
            <Route exact path="/users/register" component={Register} />
            <Route exact path="/users/login" component={Login} />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
