import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Home />
      </main>
    </>
  );
}

export default App;
