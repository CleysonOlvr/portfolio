import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import GlobalStyles from "./styles/globalStyles";
import { MainContent } from "./styles";
import "./styles";
import Profile from "./components/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <MainContent>
      <Header />
      <Profile />
    </MainContent>
  </React.StrictMode>
);
