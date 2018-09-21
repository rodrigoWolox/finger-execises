import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "../redux/store";

import Home from "./screens/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home store={store} />
      </Provider>
    );
  }
}

export default App;
