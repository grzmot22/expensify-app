import "normalize.css/normalize.css";
import React from "react";
import "react-dates/lib/css/_datepicker.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import LoadingPage from "./components/LoadingPage";
import { firebase } from "./firebase/firebase";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppRouter, { history } from "./routers/AppRouter";
import { login, logout } from "./store/auth/actions";
import configureStore from "./store/configureStore";
import { setExpenses } from "./store/expenses/actions";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const root = createRoot(document.getElementById("root"));

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
  }
};

root.render(<LoadingPage />);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(setExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
