import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Noti, Profile, Star, House } from "pages";
import { Header, MNavigation } from "components";
import "styles/App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app-content">
          <Route exact path="/" component={Home} />
          <Route exact path="/noti" component={Noti} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/star" component={Star} />
          <Route exact path="/house" component={House} />
        </div>
        <MNavigation />
      </div>
    );
  }
}
export default App;
