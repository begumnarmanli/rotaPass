import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang } = useContext(LangContext);
  const t = translations[lang].footer;

  return (
    <footer
      className="w-full py-4 md:py-5 border-t border-white/5"
      style={{ background: "#080808" }}
    >
      <div className="w-full px-5 text-center flex justify-center">
        <p
          className="w-full text-white/60 text-xs md:text-sm text-center tracking-wide"
          style={{ fontFamily: "sans-serif" }}
        >
          <a
            href="https://github.com/begumnarmanli"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold signature"
          >
            Begüm Narmanlı
          </a>
          {" tarafından tasarlanmıştır. | "}© {currentYear}{" "}
          <span className="text-white/80 font-semibold">RotaPass</span>
          {". "}
          {t.rights}
        </p>
      </div>

      <style>{`
        .signature {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #fff 0%, #e81cff 40%, #40c9ff 70%, #fff 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 20s linear infinite;
          text-decoration: none;
        }
        .signature:hover {
          opacity: 0.8;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
