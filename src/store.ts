import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "src/features/auth";
import { userReducer } from "src/features/user";
import { activityReducer } from "src/features/activity";

const composeEnhancers = (import.meta.env.REACT_APP_NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    activity: activityReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
