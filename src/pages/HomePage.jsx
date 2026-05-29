import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";
import posts from "../data/posts";
import FeaturedCard from "../components/FeaturedCard";
import BlogCard from "../components/BlogCard";

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const t = translations[lang];
  const [activeHero, setActiveHero] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const heroPost = posts.filter((p) => p.featured);
  const recentPosts = posts.filter((p) => !p.featured);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroPost.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroPost.length]);

  const active = heroPost[activeHero];
  const categoryMap = translations[lang].blog.categories;

  return (
    <main style={{ background: "#080808", color: "#fff" }}>
      <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden">
        <div
          key={active?.id}
          className="absolute inset-0"
          style={{
            transition: "opacity 0.8s ease",
          }}
        >
          <img
            src={active?.image}
            alt={active?.title[lang]}
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top"
            style={{ aspectRatio: "16 / 9" }}
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.7) 45%, rgba(8,8,8,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 40%)",
          }}
        />

        <div
          className="absolute inset-0 flex flex-col justify-end md:justify-center pb-10! px-5 md:px-10 lg:px-16 pt-14 md:pt-16 lg:pt-20 max-w-95 md:max-w-150 lg:max-w-175"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{ marginLeft: 10, marginBottom: 10 }}
          >
            <div style={{ width: 24, height: 1, background: "#e81cff" }} />
            <span
              className="text-[#e81cff] uppercase tracking-widest font-semibold"
              style={{ fontSize: 8, fontFamily: "sans-serif" }}
            >
              {categoryMap[active?.category]}
            </span>
          </div>

          <h1
            className="font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-7xl"
            style={{
              marginLeft: "10px",
              marginBottom: "20px",
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            {active?.title[lang]}
          </h1>

          <p
            className="hidden md:block text-white mb-6 md:mb-8 max-w-md"
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
              lineHeight: 1.7,
              fontFamily: "sans-serif",
              fontWeight: 300,
              marginLeft: "10px",
              marginBottom: "30px",
            }}
          >
            {active?.excerpt[lang]}
          </p>

          <Link
            to={`/blog/${active?.slug}`}
            className="inline-flex items-center gap-3 w-fit pb-1.5"
            style={{
              fontSize: 9,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              transition: "border-color 0.3s",
              marginLeft: "10px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#e81cff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
            }
          >
            {t.blog.readMore}
            <span style={{ color: "#e81cff", fontSize: 16 }}>—</span>
            <span style={{ color: "#fff", fontSize: 9 }}>
              {active?.readTime[lang]}
            </span>
          </Link>
        </div>

        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {heroPost.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveHero(i)}
              aria-label={`Slayt ${i + 1}'e git`}
              style={{
                width: 2,
                height: i === activeHero ? 28 : 14,
                background:
                  i === activeHero ? "#e81cff" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                borderRadius: 2,
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <div
          className="absolute bottom-0 md:bottom-10 left-5 md:left-10 flex items-baseline gap-1.5"
          style={{ fontFamily: "sans-serif" }}
        >
          <span
            className="text-white font-bold"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1 }}
          >
            {String(activeHero + 1).padStart(2, "0")}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            / {String(heroPost.length).padStart(2, "0")}
          </span>
        </div>

        <div
          className="hidden md:block absolute bottom-10 right-8"
          style={{
            fontFamily: "sans-serif",
            fontSize: 10,
            color: "#fff",
            letterSpacing: "0.1em",
          }}
        >
          {active &&
            new Date(active.date).toLocaleDateString(
              lang === "tr" ? "tr-TR" : "en-US",
              { day: "numeric", month: "long", year: "numeric" },
            )}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-6 md:pb-8">
        <div className="flex items-center gap-4">
          <span
            className="text-white uppercase tracking-wide shrink-0"
            style={{ fontSize: 14, fontFamily: "sans-serif" }}
          >
            {t.featured.title}
          </span>
          <div
            className="w-full h-px"
            style={{ background: "rgba(255,255,255,0.08)", maxWidth: "100%" }}
          />
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-16 md:pb-14">
        <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {heroPost.map((post) => (
            <FeaturedCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <div
        style={{
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(232,28,255,0.4), rgba(64,201,255,0.4), transparent)",
        }}
      />

      {recentPosts.length > 0 && (
        <section className="px-5 md:px-10 lg:px-16 pt-10 md:pt-14 pb-6 md:pb-8">
          <div className="flex items-center gap-4 mb-8! md:mb-10">
            <span
              className="text-white uppercase tracking-wide shrink-0"
              style={{
                fontSize: 14,
                fontFamily: "sans-serif",
                marginLeft: "30px",
              }}
            >
              {t.blog.title}
            </span>
            <div
              className="w-full h-px"
              style={{ background: "rgba(255,255,255,0.08)", maxWidth: "100%" }}
            />
          </div>

          <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
