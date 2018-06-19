import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store, { history } from "./store/configureStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
