import { useContext, useState, useEffect } from "react";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";
import posts from "../data/posts";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  const { lang } = useContext(LangContext);
  const t = translations[lang].blog;
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  const categories = ["all", "europe", "asia", "americas", "africa"];
  const animClass =
    "animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out";
  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main style={{ background: "#080808", color: "#fff", minHeight: "100vh" }}>
      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-4 md:pb-6`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-5xl font-normal leading-tight mb-4"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {t.title}
        </h1>
        <p
          className="text-white/80 text-sm md:text-base"
          style={{ fontFamily: "sans-serif", fontWeight: 300 }}
        >
          {posts.length} {lang === "tr" ? "yazı" : "posts"}
        </p>
      </section>

      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 py-4 md:py-8`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3 md:gap-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="uppercase tracking-widest text-[10px] md:text-[11px] font-bold transition-all duration-300"
              style={{
                fontFamily: "sans-serif",
                color:
                  activeCategory === cat ? "#fff" : "rgba(255,255,255,0.25)",
                borderBottom:
                  activeCategory === cat
                    ? "1px solid #e81cff"
                    : "1px solid transparent",
                paddingBottom: 4,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t.categories[cat]}
            </button>
          ))}
        </div>
      </section>

      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 py-8 md:py-12 pb-16`}
      >
        {filtered.length === 0 ? (
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "sans-serif" }}
          >
            {lang === "tr"
              ? "Bu kategoride yazı bulunamadı."
              : "No posts found in this category."}
          </p>
        ) : (
          <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
