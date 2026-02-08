import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoC from "../assets/NavLogo.png";
import logoW from "../assets/NavLogoW.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
    const navigate = useNavigate();

  // Dark mode handler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on home page
      if (location.pathname === "/") {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true); // always solid on other pages
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo (Right Side) */}
        <div onClick={() => navigate("/")} className="flex items-center">
          <img
            src={scrolled ? logoC : logoW}
            alt="Logo"
            className="h-16 md:h-24 w-auto transition-all duration-300"
          />
        </div>

        {/* Dark Mode Toggle (Left Side) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-11 h-11 flex items-center justify-center rounded-xl
                     bg-white/80 hover:bg-gray-400/60 backdrop-blur
                     border border-gray-300 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            // Sun Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#374aa0] hover:text-[#374aa0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414"
              />
            </svg>
          ) : (
            // Moon Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#374aa0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
