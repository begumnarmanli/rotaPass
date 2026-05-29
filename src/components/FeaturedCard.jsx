import { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";

function FeaturedCard({ post }) {
  const { lang } = useContext(LangContext);
  const t = translations[lang].blog;
  const fixedGradient = "from-[#e81cff] to-[#40c9ff]";

  const categoryColors = {
    europe: "from-[#e81cff] to-[#40c9ff]",
    asia: "from-[#ff6b35] to-[#f7c59f]",
    americas: "from-[#40c9ff] to-[#00b4d8]",
    africa: "from-[#f9c74f] to-[#f3722c]",
  };

  const gradientClass =
    categoryColors[post.category] || "from-[#e81cff] to-[#40c9ff]";

  return (
    <Link
      to={`/blog/${post.slug}`}
      aria-label={`${post.title[lang]} yazısını oku`}
      className="flex justify-center group w-full relative"
    >
      <div
        className={`absolute inset-0 bg-linear-to-r ${fixedGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 scale-[0.95] pointer-events-none`}
        style={{ zIndex: 1 }}
      />
      <div
        className={`relative w-[85%] md:w-full h-55 md:h-90 lg:h-105 rounded-2xl p-px bg-transparent group-hover:bg-linear-to-r ${fixedGradient} overflow-hidden cursor-pointer transition-all duration-300`}
        style={{ zIndex: 2 }}
      >
        <div className="w-full h-full bg-black rounded-[15px] relative overflow-hidden flex flex-col justify-end">
          <div
            className="absolute inset-0 rounded-[15px] overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <img
              src={post.image}
              srcSet={`
    ${post.image.replace(".webp", "-800.webp")} 800w,
    ${post.image.replace(".webp", "-1200.webp")} 1200w,
    ${post.image} 1920w
  `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={post.title[lang]}
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-100 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 25%, transparent 100%)",
              }}
            />
          </div>

          <div
            className="absolute top-2.5 left-2.5 md:top-3 md:left-3"
            style={{ zIndex: 2 }}
          >
            <span
              className={`bg-linear-to-r ${gradientClass} text-black text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 md:px-2.5 md:py-1 rounded-full`}
            >
              {t.categories[post.category]}
            </span>
          </div>

          <div
            className="absolute top-2.5 right-2.5 md:top-3 md:right-3"
            style={{ zIndex: 2 }}
          >
            <span className="text-white text-[11px] md:text-[12px] backdrop-blur-sm bg-black/40 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full border border-white/10">
              {post.readTime[lang]}
            </span>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 flex flex-col gap-1.5 p-4 md:p-5"
            style={{ zIndex: 2 }}
          >
            <div
              className={`h-0.5 w-6 md:w-10 bg-linear-to-r ${gradientClass} mb-1 group-hover:w-14 transition-all duration-500`}
            />
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-black leading-tight tracking-tight">
              {post.title[lang]}
            </h2>
            <p className="hidden md:block text-white/70 text-xs lg:text-sm leading-relaxed line-clamp-2">
              {post.excerpt[lang]}
            </p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white text-[10px]">
                {new Date(post.date).toLocaleDateString(
                  lang === "tr" ? "tr-TR" : "en-US",
                  { day: "numeric", month: "long", year: "numeric" },
                )}
              </span>
              <span
                className={`flex items-center gap-1 text-[11px] md:text-xs font-bold text-transparent bg-clip-text bg-linear-to-r ${gradientClass} shrink-0`}
              >
                {t.readMore}
                <svg
                  className="w-3 h-3 text-[#e81cff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedCard;
