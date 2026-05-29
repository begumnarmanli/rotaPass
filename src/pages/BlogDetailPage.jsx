import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";
import posts from "../data/posts";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { lang } = useContext(LangContext);
  const t = translations[lang];

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main
        className="flex flex-col items-center justify-center px-5 min-h-screen"
        style={{ background: "#080808", color: "#fff" }}
      >
        <p className="text-white/30 text-sm mb-4 font-sans">
          {lang === "tr" ? "Yazı bulunamadı." : "Post not found."}
        </p>
        <Link
          to="/blog"
          className="text-white/50 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300 font-sans"
          style={{ textDecoration: "none" }}
        >
          ← {t.blog.title}
        </Link>
      </main>
    );
  }

  const categoryColors = {
    europe: "from-[#e81cff] to-[#40c9ff]",
    asia: "from-[#ff6b35] to-[#f7c59f]",
    americas: "from-[#40c9ff] to-[#00b4d8]",
    africa: "from-[#f9c74f] to-[#f3722c]",
  };
  const gradientClass =
    categoryColors[post.category] || "from-[#e81cff] to-[#40c9ff]";
  const fixedGradient = "from-[#e81cff] to-[#40c9ff]";

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main
      className="min-h-screen"
      style={{ background: "#080808", color: "#fff" }}
    >
      <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title[lang]}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, transparent 40%)",
          }}
        />
      </div>

      <article className="px-5 md:px-12 lg:px-20 max-w-5xl mx-auto relative z-10">
        <div className="pt-10 pb-8 md:pt-12 md:pb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-white transition-colors duration-300 text-[11px] uppercase tracking-widest font-sans"
            style={{ textDecoration: "none" }}
          >
            ← {t.blog.title}
          </Link>
        </div>
        <div className="flex items-center gap-4 mb-6! flex-wrap">
          <span
            className={`bg-linear-to-r ${gradientClass} text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full`}
          >
            {t.blog.categories[post.category]}
          </span>
          <span className="text-white/70 text-xs font-sans">
            {new Date(post.date).toLocaleDateString(
              lang === "tr" ? "tr-TR" : "en-US",
              { day: "numeric", month: "long", year: "numeric" },
            )}
          </span>
          <span className="text-white/70 text-xs font-sans">
            {post.readTime[lang]}
          </span>
        </div>
        <h1
          className="text-3xl md:text-5xl font-normal leading-tight mb-10 md:mb-12"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {post.title[lang]}
        </h1>
        <div className={`h-px w-16 bg-linear-to-r ${gradientClass} mb-10`} />
        <p
          className="text-white/70 text-base md:text-lg font-sans font-light mb-20 md:mb-24"
          style={{ lineHeight: 2 }}
        >
          {post.content[lang]}
        </p>
      </article>

      <section
        className="px-5 md:px-12 lg:px-20 pt-12 pb-8 md:pb-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-4 mb-6!">
          <span className="text-white uppercase tracking-widest text-[10px] shrink-0 font-sans">
            {lang === "tr" ? "Diğer Yazılar" : "More Posts"}
          </span>
          <div
            className="w-full h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </div>

        <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:gap-8">
          {otherPosts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="flex justify-center group w-full relative"
              style={{ textDecoration: "none" }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${fixedGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 scale-[0.95] pointer-events-none`}
                style={{ zIndex: 1 }}
              />
              <div
                className={`relative w-[85%] md:w-full h-45 md:h-55 rounded-2xl p-px bg-transparent group-hover:bg-linear-to-r ${fixedGradient} overflow-hidden cursor-pointer transition-all duration-300`}
                style={{ zIndex: 2 }}
              >
                <div className="w-full h-full bg-black rounded-[15px] relative overflow-hidden flex flex-col justify-end">
                  <img
                    src={p.image}
                    alt={p.title[lang]}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span
                      className={`bg-linear-to-r from-[#e81cff] to-[#40c9ff] text-black text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full`}
                    >
                      {t.blog.categories[p.category]}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3
                      className="text-white text-sm md:text-base font-bold leading-tight"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {p.title[lang]}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
