import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";

// Added all the proper imports.
// Created my store and passed it the rootReducer, thunk middleware and logger as arguments

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
