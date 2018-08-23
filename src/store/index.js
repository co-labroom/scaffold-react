import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const configureStore = new function ConfigureStore() {
  const reducerMap = {};

  function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      } else {
        return state;
      }
    };
  }

  return {
    pushModel: model => {
      const { namespace = "app", reducers, state = {} } = model;
      const renameReducers = {};
      Object.keys(reducers || {}).reduce((lastRenameReducers, currentValue) => {
        lastRenameReducers[`${namespace}/${currentValue}`] =
          reducers[currentValue];
        return lastRenameReducers;
      }, renameReducers);

      reducerMap[namespace] = createReducer(state, renameReducers);
    },

    createStore: preloadedState => {
      return createStore(
        combineReducers(reducerMap),
        preloadedState,
        compose(
          applyMiddleware(thunk),
          process.env.BROWSER
            ? window.devToolsExtension
              ? window.devToolsExtension()
              : f => f
            : f => f
        )
      );
    }
  };
}();

export default configureStore;
