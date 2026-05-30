"use client";

import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[#020817] text-white overflow-x-hidden`}
    >
      {/* TRAVELPAYOUTS */}
      <Script id="travelpayouts-widget" strategy="afterInteractive">
        {`
          (function () {
            var script = document.createElement("script");
            script.async = true;
            script.type = "module";
            script.src = "https://tpwdg.com/wl_web/main.js?wl_id=18030";
            document.head.appendChild(script);
          })();
        `}
      </Script>

      {/* HEADER */}
      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-[#020817]/90">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">✈️</span>

            <h1 className="text-3xl font-black tracking-tight">
              UçGit
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Kampanyalar
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Blog
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              İletişim
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Hakkımızda
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="text-sm text-white/80 hover:text-white transition">
              Giriş Yap
            </button>

            <button className="bg-blue-500 hover:bg-blue-400 transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.35)] px-4 py-1.5 rounded-xl text-sm font-semibold">
              Kayıt Ol
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-4 px-6">
        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-blue-400 mb-6 text-sm tracking-wide uppercase">
              En uygun uçuşları saniyeler içinde bul
            </p>

            <h1 className="text-xl md:text-5xl font-black leading-tight mb-4 tracking-tight">
              Ucuza uçmanın{" "}
              <span className="text-blue-500">
                en kolay yolu
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8 leading-relaxed">
              Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör ve
              en uygun bileti saniyeler içinde bul.
            </p>
          </div>

          {/* SEARCH */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 border border-white/10 rounded-[32px] p-6 shadow-2xl">
              <div id="tpwl-search"></div>
            </div>

            {/* RESULTS */}
            <div className="mt-6">
              <div id="tpwl-tickets"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AIRLINES */}
      

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-1">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">✈️</span>

              <a href="/" className="text-2xl font-black">
                UçGit
              </a>
            </div>

            <p className="text-white/50 leading-normal text-sm">
              ucgit.com ile tüm havayollarını karşılaştırın ve en uygun uçuşları
              saniyeler içinde bulun.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="font-bold mb-5 text-base">
              Menü
            </h4>

            <div className="flex flex-col gap-2 text-white/50">
              <a
                href="#"
                className="hover:text-white transition"
              >
                Kampanyalar
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Blog
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                İletişim
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Hakkımızda
              </a>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-bold mb-5 text-lg">
              Destek
            </h4>

            <div className="flex flex-col gap-3 text-white/50">
              <a
                href="#"
                className="hover:text-white transition"
              >
                Sık Sorulan Sorular
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Gizlilik Politikası
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Kullanım Şartları
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold mb-5 text-lg">
              İletişim
            </h4>

            <div className="flex flex-col gap-3 text-white/50">
              <p>support@ucgit.com</p>

              <p>info@ucgit.com</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40">
          © 2026 ucgit.com Tüm hakları saklıdır.
        </div>
      </footer>
    </main>
  );
}