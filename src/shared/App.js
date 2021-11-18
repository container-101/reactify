import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Posts, Home, About } from "../pages";
import { Header } from "../components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app-content">
          <Route exact path="/" component={Home} />
          <Switch>
            <Route path="/about/:name" component={About} />
            <Route path="/about" component={About} />
          </Switch>
          <Route path="/posts" component={Posts}></Route>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
          <div className="makewidth">asdasd</div>
        </div>
      </div>
    );
  }
}
export default App;
