import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";
import logo from "../assets/icons/logo.webp";
import LanguageToggle from "./LanguageToggle";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useContext(LangContext);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isOpen || isScrolled
          ? "bg-[#080808] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-4! md:px-6! lg:px-12!">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="RotaPass"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link
            to="/"
            className="text-white transition-all md:text-lg lg:text-xl lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-linear-to-r lg:hover:from-[#e81cff] lg:hover:to-[#40c9ff] lg:hover:drop-shadow-[0_0_8px_rgba(232,28,255,0.5)]"
          >
            {t.home}
          </Link>
          <Link
            to="/blog"
            className="text-white transition-all md:text-lg lg:text-xl lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-linear-to-r lg:hover:from-[#e81cff] lg:hover:to-[#40c9ff] lg:hover:drop-shadow-[0_0_8px_rgba(232,28,255,0.5)]"
          >
            {t.blog}
          </Link>
          <Link
            to="/about"
            className="text-white transition-all md:text-lg lg:text-xl lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-linear-to-r lg:hover:from-[#e81cff] lg:hover:to-[#40c9ff] lg:hover:drop-shadow-[0_0_8px_rgba(232,28,255,0.5)]"
          >
            {t.about}
          </Link>
        </div>

        <div className="flex items-center gap-4 mr-2">
          <LanguageToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#080808] flex flex-col items-center justify-start h-screen pt-40 gap-8">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-medium tracking-wide"
          >
            {t.home}
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-medium tracking-wide"
          >
            {t.blog}
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-medium tracking-wide"
          >
            {t.about}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
