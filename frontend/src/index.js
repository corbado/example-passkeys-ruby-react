import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/login";
import Profile from "./routes/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

window.addEventListener("DOMContentLoaded", function (e) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

  reportWebVitals();
});
