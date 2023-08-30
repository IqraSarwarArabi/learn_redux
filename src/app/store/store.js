import { createStore } from "redux";
import counterReducer from "../reducers/CounterReducers";

const store = createStore(counterReducer);

export default store;
