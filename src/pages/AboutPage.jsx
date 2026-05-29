import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import translations from "../data/translations";

export default function AboutPage() {
  const { lang } = useContext(LangContext);
  const t = translations[lang];

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

  const stats = [
    {
      value: "6",
      label: lang === "tr" ? "Destinasyon" : "Destinations",
    },
    {
      value: "4",
      label: lang === "tr" ? "Kıta" : "Continents",
    },
    {
      value: "2024",
      label: lang === "tr" ? "Yılından Beri" : "Since",
    },
  ];

  const animClass =
    "animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out";

  return (
    <main
      className="min-h-screen"
      style={{ background: "#080808", color: "#fff" }}
    >
      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 pt-28 md:pt-36 md:pb-6 lg:pb-16`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-3xl">
          <p className="text-white/60 text-base uppercase tracking-widest font-sans mb-4! md:mb-10!">
            {t.about.title}
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {lang === "tr" ? (
              <>
                Dünya büyük,
                <br className="lg:hidden" /> zaman kısıtlı..
              </>
            ) : (
              <>
                The world is vast,
                <br className="lg:hidden" /> time is limited.
              </>
            )}
          </h1>
          <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl">
            {lang === "tr"
              ? "RotaPass; gezginlere ilham vermek, doğru bilgiyi doğru zamanda sunmak ve her yolculuğu unutulmaz kılmak için kuruldu."
              : "RotaPass was founded to inspire travelers, deliver the right information at the right time, and make every journey unforgettable."}
          </p>
        </div>
      </section>

      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 py-6 md:py-12 lg:pt-6! lg:pb-16`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 max-w-2xl text-left sm:text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border-l sm:border-l-0 sm:border-t-0 border-white/10 pl-4 sm:pl-0"
            >
              <p
                className="text-4xl md:text-5xl font-normal mb-1 md:mb-3!"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-white/50 text-[10px] md:text-base uppercase tracking-widest font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 py-6 md:py-12 lg:pt-6! lg:pb-16`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-4xl">
          <div>
            <p className="text-white text-base uppercase tracking-widest font-sans mb-4">
              {lang === "tr" ? "Misyon" : "Mission"}
            </p>
            <p className="text-white/80 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl">
              {lang === "tr"
                ? "Seyahati herkes için erişilebilir, planlanabilir ve anlamlı kılmak."
                : "Making travel accessible, plannable, and meaningful for everyone."}
            </p>
          </div>
          <div>
            <p className="text-white text-base uppercase tracking-widest font-sans mb-4">
              {lang === "tr" ? "Vizyon" : "Vision"}
            </p>
            <p className="text-white/80 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl">
              {lang === "tr"
                ? "Dünyanın dört bir yanından ilham verici hikayeler ve pratik rehberler sunarak gezginlerin yeni ufuklar keşfetmesine öncülük etmek."
                : "Leading travelers to discover new horizons by offering inspiring stories and practical guides from every corner of the world."}
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 py-6 md:py-12 lg:py-16`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-white text-base uppercase tracking-widest font-sans mb-10">
          {lang === "tr" ? "Değerlerimiz" : "Our Values"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl">
          {[
            {
              title: lang === "tr" ? "Özgünlük" : "Authenticity",
              desc:
                lang === "tr"
                  ? "Her içerik gerçek deneyimlerden ve güvenilir kaynaklardan beslenir."
                  : "Every piece of content is fed by real experiences and reliable sources.",
            },
            {
              title: lang === "tr" ? "Sadelik" : "Simplicity",
              desc:
                lang === "tr"
                  ? "Karmaşayı bir kenara bırakıp seyahatin özüne odaklanıyoruz."
                  : "We set aside complexity and focus on the essence of travel.",
            },
            {
              title: lang === "tr" ? "Merak" : "Curiosity",
              desc:
                lang === "tr"
                  ? "Her şehir, her kültür yeni bir keşif fırsatıdır."
                  : "Every city, every culture is a new opportunity for discovery.",
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-6">
              <p
                className="text-lg md:text-xl font-normal mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {item.title}
              </p>
              <p className="text-white/80 text-base font-sans font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${animClass} px-5 md:px-10 lg:px-16 py-8 md:py-14 lg:py-20 pb-18 md:pb-24 lg:pb-20`}
      >
        <div className="max-w-xl">
          <p
            className="text-2xl md:text-3xl font-normal leading-snug mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {lang === "tr"
              ? "Bir sonraki durağınız nereye olsun?"
              : "Where will your next stop be?"}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-white text-xs uppercase tracking-widest font-sans font-bold pb-1"
            style={{
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#e81cff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
            }
          >
            {lang === "tr" ? "Yazıları Keşfet" : "Explore Posts"}
            <span className="text-[#e81cff]">—</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
