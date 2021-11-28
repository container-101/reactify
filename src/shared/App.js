import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Posts, Home, About } from "pages";
import { Header, MNavigation } from "components";
import "styles/App.scss";

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
        </div>
        <MNavigation />
      </div>
    );
  }
}
export default App;
