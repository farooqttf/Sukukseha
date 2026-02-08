import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/privacyPolicy";
import SecurityAwarness from "./pages/SecurityAwarness";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem("darkMode");
    if (currentMode) {
      setDarkMode(currentMode === "true");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="font-tajawal">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/security" element={<SecurityAwarness />} />
        {/* Optional: catch all 404 */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
