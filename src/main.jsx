import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import GlobalStyles from "./styles/globalStyles";
import { MainContent } from "./styles";
import "./styles";
import Profile from "./components/Profile";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <MainContent>
      <Header />
      <Profile />
    </MainContent>
    <About />
  </React.StrictMode>
);
