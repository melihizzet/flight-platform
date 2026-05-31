"use client";

import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <main
      className={
        inter.className +
        " min-h-screen bg-[#020817] text-white overflow-x-hidden"
      }
    >
      {/* SEO */}
      <title>UçGit | En Uygun Uçak Bileti Bul</title>

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

      {/* GLOBAL FIXES */}
      <style jsx global>{`
        .tpwl_passenger-form__content label:last-child span:last-child {
          font-size: 0 !important;
        }

        .tpwl_passenger-form__content label:last-child span:last-child::after {
          content: "Business";
          font-size: 15px;
        }

        iframe {
          width: 100% !important;
          max-width: 100% !important;
          border-radius: 24px !important;
        }

        #tpwl-search,
        .tpwl-widget {
          overflow: visible !important;
        }

        /* widget yazıları */
        .tpwl-widget a,
        .tpwl-widget span,
        .tpwl-widget label,
        .tpwl-widget div {
          color: rgba(255,255,255,0.88) !important;
        }

        /* hover */
        .tpwl-widget a:hover {
          color: #ffffff !important;
        }
      `}</style>

      {/* HEADER */}
      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-[#020817]/90">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <span className="text-blue-400 text-lg rotate-[-25deg]">
                ✈️
              </span>
            </div>

            <h1 className="text-2xl font-black tracking-tight">
              Uç<span className="text-blue-500">Git</span>
            </h1>

          </a>

          <div className="flex items-center gap-3">

            <button className="text-xs text-white/80 hover:text-white transition">
              Giriş Yap
            </button>

            <button className="bg-blue-500 hover:bg-blue-400 transition px-3 py-1.5 rounded-xl text-xs font-semibold">
              Kayıt Ol
            </button>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-8 px-4">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_50%)]"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <p className="text-blue-400 mb-3 text-xs tracking-[0.2em] uppercase">
            En Uygun Uçak Bileti
          </p>

          <h1 className="text-xl md:text-4xl font-black leading-tight mb-4 tracking-tight">
            En uygun uçak biletini{" "}
            <span className="text-blue-500">
              saniyeler içinde bul
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
            ve en ucuz uçuşları hızlıca keşfet.
          </p>

          {/* SEARCH */}
          <div className="max-w-5xl mx-auto">

            <div className="bg-white/10 border border-white/10 rounded-[28px] p-2 shadow-2xl overflow-visible max-w-[820px] mx-auto scale-[0.93] origin-top">

              <div id="tpwl-search"></div>

            </div>

            {/* RESULTS */}
            <div className="mt-5 hidden">
              <div id="tpwl-tickets"></div>
            </div>

            {/* POPULAR ROUTES */}
            <div className="mt-8 bg-white rounded-3xl p-3 overflow-hidden shadow-2xl">
              <script
                async
                src="https://tpwdg.com/content?currency=try&trs=533807&shmarker=733574&show_hotels=true&powered_by=true&locale=tr&searchUrl=www.aviasales.com%2Fsearch&primary_override=%233B82F6&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=15&no_labels=&plain=true&promo_id=7879&campaign_id=100" 
                charset="utf-8"
              
              ></script>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
            <div className="text-2xl mb-2">✈️</div>

            <h3 className="text-base font-bold mb-2">
              En Uygun Fiyatlar
            </h3>

            <p className="text-sm text-white/60 leading-relaxed">
              Yüzlerce havayolunu karşılaştırarak en ucuz uçuşları keşfet.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
            <div className="text-2xl mb-2">⚡</div>

            <h3 className="text-base font-bold mb-2">
              Hızlı Karşılaştırma
            </h3>

            <p className="text-sm text-white/60 leading-relaxed">
              Gerçek zamanlı fiyatlarla hızlı arama yap ve en avantajlı bileti bul.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
            <div className="text-2xl mb-2">🌍</div>

            <h3 className="text-base font-bold mb-2">
              Dünya Genelinde
            </h3>

            <p className="text-sm text-white/60 leading-relaxed">
              İstanbul, Londra, Paris, Dubai ve yüzlerce destinasyona uygun uçuşlar.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 mt-10">

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

          <div>

            <a href="/" className="flex items-center gap-3 mb-4">

              <div className="w-9 h-9 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <span className="text-blue-400 text-lg rotate-[-25deg]">
                  ✈️
                </span>
              </div>

              <h1 className="text-2xl font-black tracking-tight">
                Uç<span className="text-blue-500">Git</span>
              </h1>

            </a>

            <p className="text-white/50 text-sm leading-relaxed">
              UçGit ile tüm havayollarını karşılaştırın ve en uygun uçuşları saniyeler içinde bulun.
            </p>

          </div>

          <div>

            <h4 className="font-bold mb-4 text-sm">
              Menü
            </h4>

            <div className="flex flex-col gap-2 text-sm text-white/50">

              <a href="/campaigns" className="hover:text-white transition">
                Kampanyalar
              </a>

              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>

              <a href="/contact" className="hover:text-white transition">
                İletişim
              </a>

              <a href="/about" className="hover:text-white transition">
                Hakkımızda
              </a>

            </div>

          </div>

          <div>

            <h4 className="font-bold mb-4 text-sm">
              Destek
            </h4>

            <div className="flex flex-col gap-2 text-sm text-white/50">

              <a href="/faq" className="hover:text-white transition">
                Sık Sorulan Sorular
              </a>

              <a href="/privacy-policy" className="hover:text-white transition">
                Gizlilik Politikası
              </a>

              <a href="/terms" className="hover:text-white transition">
                Kullanım Şartları
              </a>

            </div>

          </div>

          <div>

            <h4 className="font-bold mb-4 text-sm">
              İletişim
            </h4>

            <div className="flex flex-col gap-2 text-sm text-white/50">

              <p>support@ucgit.com</p>
              <p>info@ucgit.com</p>

            </div>

          </div>

        </div>

        <div className="max-w-5xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          ©️ 2026 UçGit.com — Tüm hakları saklıdır.
        </div>

      </footer>

    </main>
  );
}