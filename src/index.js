/**
 * Created by common on 2017/7/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store";
import router from "./router";
import ticTacToeModel from "store/reducers/ticTacToe";
import "assets/styles/global.scss";

configureStore.pushModel(ticTacToeModel);

const render = Component => {
  const rootEl = document.querySelector("#root");
  ReactDOM.render(
    <Provider store={configureStore.createStore()}>
      <Component />
    </Provider>,
    rootEl
  );
};

render(router);
