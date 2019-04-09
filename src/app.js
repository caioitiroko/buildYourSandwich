import { Actions, Router, Scene, Stack } from "react-native-router-flux";
import { Provider } from "react-redux";
import React from "react";
import ChooseSandwich from "./components/chooseSandwich";
import ChooseIngredients from "./components/chooseIngredients";
import storeBuilder from "./store";

const { store, run } = storeBuilder();

run();

const App = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene key="chooseSandwich" component={ChooseSandwich} hideNavBar initial />
        <Scene key="chooseIngredients" component={ChooseIngredients} hideNavBar />
      </Stack>
    </Router>
  </Provider>
);

export default App;
