import {
  Router, Scene, Stack,
} from "react-native-router-flux";
import { Provider } from "react-redux";
import React from "react";
import ChooseSandwich from "./modules/Sandwiches/pages/ChooseSandwich";
import ChooseIngredients from "./modules/Ingredients/pages/ChooseIngredients";
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
