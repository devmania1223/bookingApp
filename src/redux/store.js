import createSagaMidddelware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddelware = createSagaMidddelware();
const middleWares = [sagaMiddelware];
const composables = [applyMiddleware(...middleWares)];
const enhancer = compose(
    ...composables
);
const store = createStore(
    reducers,
    enhancer
);
sagaMiddelware.run(sagas);
export default store;


