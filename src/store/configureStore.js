import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "./auth/reducer";
import expensesReducer from "./expenses/reducer";
import filtersReducer from "./filters/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer,
          auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );

      return store;
}

export default store;
