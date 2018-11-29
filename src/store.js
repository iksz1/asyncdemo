import { createStore, applyMiddleware } from "redux";
import middleware from "./middleware";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(middleware));

export default store;
