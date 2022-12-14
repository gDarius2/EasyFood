import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-s9p5rno0.us.auth0.com"
      clientId="EVlrDzPgcIlJVaV1QBXrp6u7fxq2CA3w"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <>
          <Header />

          <App />
        </>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
