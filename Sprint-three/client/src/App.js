import React, { Component } from "react";
import Upload from "./components/Upload";
import Home from "./components/Home";
import "./styles/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = {
    footerArray: [],
    videoInfo: [],
    commentArray: [],

    arr: []
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/videos/:id"
            render={routerProps => (
              <Home
                state={this.state}
                video={this.state.videoInfo}
                {...routerProps}
              />
            )}
          />
          <Redirect exact from="/" to="/videos/1af0jruup5gu" />
          <Route path="/upload" component={Upload}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
