import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://yourdomain.com/tonconnect-manifest.json">
      <Router>
        <nav className="bg-white shadow-md px-6 py-4 flex gap-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;