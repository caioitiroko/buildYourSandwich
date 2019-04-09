import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import sagas from "./sagas";

const sagaRunner = createSagaMiddleware();
const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducer, applyMiddleware(sagaRunner, logger));
const run = () => sagaRunner.run(sagas);

const storeBuilder = () => ({
  store,
  run,
});


export default storeBuilder;
