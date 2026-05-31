"use client";

import Script from "next/script";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://tpwdg.com/content?currency=try&trs=533807&shmarker=733574&locale=tr&powered_by=true&from_name=istanbul_tr&limit=3&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111";

    script.async = true;

    document
      .getElementById("popular-flights")
      ?.appendChild(script);

    return () => script.remove();
  }, []);

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

      {/* HEADER */}
      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-[#020817]/90">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <span className="text-blue-400 text-xl rotate-[-25deg]">
                ✈️
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight">
              Uç<span className="text-blue-500">Git</span>
            </h1>

          </a>

          <div className="flex items-center gap-3">

            <button className="text-sm text-white/80 hover:text-white transition">
              Giriş Yap
            </button>

            <button className="bg-blue-500 hover:bg-blue-400 transition px-4 py-2 rounded-xl text-sm font-semibold">
              Kayıt Ol
            </button>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-11 px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <p className="text-blue-400 mb-6 text-sm tracking-wide uppercase">
            En Uygun Uçak Bileti
          </p>

          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-6 tracking-tight">
            En uygun uçak biletini{" "}
            <span className="text-blue-500">
              saniyeler içinde bul
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
            ve en ucuz uçuşları hızlıca keşfet.
          </p>

          {/* SEARCH */}
          <div className="max-w-6xl mx-auto">

            <div className="bg-white/10 border border-white/10 rounded-[32px] p-6 shadow-2xl">
              <div id="tpwl-search"></div>
            </div>

{/* POPULAR DESTINATIONS */}
<section className="max-w-7xl mx-auto px-6 py-12">

  <div className="text-center mb-8">

    <p className="text-blue-400 text-xs tracking-[0.25em] uppercase mb-3">
      Popüler Rotalar
    </p>

    <h2 className="text-2xl md:text-3xl font-black mb-3">
      En iyi uçuş fırsatları
    </h2>

    <p className="text-white/50 text-sm">
      Güncel fiyatlarla popüler destinasyonları keşfet.
    </p>

  </div>

  <div className="bg-white rounded-[28px] overflow-hidden shadow-2xl p-4 min-h-[520px]">

    <div
      dangerouslySetInnerHTML={{
        __html: `
        <script async src="https://tpwdg.com/content?currency=try&trs=533807&shmarker=733574&destination=IST&target_host=www.aviasales.com%2Fsearch&locale=tr&limit=10&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100" charset="utf-8"></script>
        `,
      }}
    />

  </div>

</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 mt-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>

            <a href="/" className="flex items-center gap-3 mb-4">

              <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <span className="text-blue-400 text-xl rotate-[-25deg]">
                  ✈️
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight">
                Uç<span className="text-blue-500">Git</span>
              </h1>

            </a>

            <p className="text-white/50 text-sm leading-relaxed">
              UçGit ile tüm havayollarını karşılaştırın ve en uygun uçuşları saniyeler içinde bulun.
            </p>

          </div>

          {/* MENU */}
          <div>

            <h4 className="font-bold mb-5">
              Menü
            </h4>

            <div className="flex flex-col gap-3 text-white/50">

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

          {/* SUPPORT */}
          <div>

            <h4 className="font-bold mb-5">
              Destek
            </h4>

            <div className="flex flex-col gap-3 text-white/50">

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

          {/* CONTACT */}
          <div>

            <h4 className="font-bold mb-5">
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
          ©️ 2026 UçGit.com — Tüm hakları saklıdır.
        </div>

      </footer>

    </main>
  );
}
`