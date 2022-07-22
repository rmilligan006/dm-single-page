import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Books from "./components/Books";
import Calendar from "./components/Calendar";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Books />
      <Calendar />
    </>
  );
}

export default App;
