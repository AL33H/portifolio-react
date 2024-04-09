import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Skills from "./components/skill";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Footer />
  </React.StrictMode>
);
