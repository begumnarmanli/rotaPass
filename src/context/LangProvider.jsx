import { useState } from "react";
import { LangContext } from "./LangContext";
import Toast from "../components/Toast";

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("rotapass-lang") || "en",
  );

  const [toast, setToast] = useState(null);

  const toggleLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("rotapass-lang", newLang);
    if (newLang === "tr") {
      setToast({
        message: "Dil Türkçe olarak ayarlandı.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
            className="w-6 h-4"
          >
            <rect width="1200" height="800" fill="#E30A17" />
            <circle cx="425" cy="400" r="160" fill="white" />
            <circle cx="475" cy="400" r="130" fill="#E30A17" />
            <polygon
              points="583,400 612,300 560,388 480,340 528,428 448,460 536,460 564,560"
              fill="white"
            />
          </svg>
        ),
      });
    } else {
      setToast({
        message: "Language changed to English",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            className="w-6 h-4"
          >
            <rect width="60" height="30" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="white" strokeWidth="6" />
            <path
              d="M0,0 L60,30 M60,0 L0,30"
              stroke="#C8102E"
              strokeWidth="4"
            />
            <path d="M30,0 V30 M0,15 H60" stroke="white" strokeWidth="10" />
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
          </svg>
        ),
      });
    }
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          icon={toast.icon}
          onClose={() => setToast(null)}
        />
      )}
    </LangContext.Provider>
  );
};
