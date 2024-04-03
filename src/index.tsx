import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skills from "./components/skill/skills";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Contact recipientEmail="aleff.remberto@hotmail.com" />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
