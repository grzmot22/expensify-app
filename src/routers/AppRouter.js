import { createMemoryHistory as createHistory } from "history";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddExpensePage from "./../components/AddExpensePage";
import EditExpensePage from "./../components/EditExpensePage";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";
import LoginPage from "./../components/LoginPage";
import NotFoundPage from "./../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Routes>
      <Route
        path="/"
        element={<PublicRoute component={LoginPage} />}
        exact={true}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute component={ExpenseDashboardPage} />}
      />
      <Route
        path="/create"
        element={<PrivateRoute component={AddExpensePage} />}
      />
      <Route
        path="/edit/:id"
        element={<PrivateRoute component={EditExpensePage} />}
      />
      <Route element={<NotFoundPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
