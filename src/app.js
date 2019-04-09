import { Provider } from "react-redux";
import React from "react";
import Test from "./components/test";
import storeBuilder from "./store";

const { store, run } = storeBuilder();

run();

const App = () => (
  <Provider store={store}>
    <Test />
  </Provider>
);

export default App;
