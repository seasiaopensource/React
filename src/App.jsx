import React, { Suspense, Component } from "react";
import { Routes } from "./app/routes";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";

import { accountClient } from "./app/apollo";
import { store, persistor } from "./app/store";
import "./style/index.scss";

import ErrorBoundary from "./components/ErrorBoundary";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={accountClient}>
            <Router>
              <ErrorBoundary>
                <Suspense fallback={"Loading..."}>
                  <Routes />
                </Suspense>
              </ErrorBoundary>
            </Router>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}
