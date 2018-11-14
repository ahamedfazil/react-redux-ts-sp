import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Fabric } from "office-ui-fabric-react";
import App from "./containers/App";
import "./styles/app.scss";
import configureStore from "./store/configureStore";
import { ConnectedRouter } from "react-router-redux";
import { history } from "../src/store/configureStore.dev";

const storeObj = configureStore();

ReactDOM.render(
  <Fabric>
    <Provider store={storeObj}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </Fabric>,
  document.getElementById("root") as HTMLElement
);
