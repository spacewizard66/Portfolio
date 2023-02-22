import React from "react";
import './App.css';

// Import Component
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <React.StrictMode>
      <Home />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
