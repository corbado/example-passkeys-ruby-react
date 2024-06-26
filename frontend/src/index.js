import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/login";
import Profile from "./routes/profile";
import {CorbadoProvider} from "@corbado/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

window.addEventListener("DOMContentLoaded", function (e) {
  ReactDOM.createRoot(document.getElementById("root")).render(
      <CorbadoProvider projectId={process.env.REACT_APP_CORBADO_PROJECT_ID} setShortSessionCookie={true}>
          <RouterProvider router={router} />
      </CorbadoProvider>
  );

  reportWebVitals();
});
