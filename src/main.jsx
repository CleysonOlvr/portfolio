import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import GlobalStyles from "./styles/globalStyles";
import "./styles";
import { MainContent } from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <MainContent>
      <Header />
    </MainContent>
  </React.StrictMode>
);
