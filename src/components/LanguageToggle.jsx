import { useContext } from "react";
import { LangContext } from "../context/LangContext";

function LanguageToggle() {
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <button
      onClick={() => toggleLang(lang === "en" ? "tr" : "en")}
      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-base font-bold text-white transition-all bg-white/5 border border-white/10 lg:hover:text-[#40c9ff] lg:hover:border-[#40c9ff]/40 lg:hover:drop-shadow-[0_0_8px_rgba(64,201,255,0.4)]"
    >
      <svg
        className="w-4 h-4 opacity-70"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0V3m0 18c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zM3.05 9h17.9M3.05 15h17.9"
        />
      </svg>
      <span>{lang === "en" ? "TR" : "EN"}</span>
    </button>
  );
}

export default LanguageToggle;
