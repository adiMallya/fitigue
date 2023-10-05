import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "src/features/auth";

const composeEnhancers = (import.meta.env.REACT_APP_NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;

export const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
