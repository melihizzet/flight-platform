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
        " min-h-screen bg-white text-slate-900 overflow-x-hidden"
      }
    >
      {/* SEO */}
      <title>UçGit | En Uygun Uçak Bileti Bul</title>

      {/* ===================================================== */}
      {/* TRAVELPAYOUTS - ÇALIŞAN KODUNA DOKUNMADIK             */}
      {/* ===================================================== */}

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

      {/* ===================================================== */}
      {/* HEADER                                                */}
      {/* ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* MENU */}
          <nav className="hidden items-center gap-9 md:flex">

            <a
              href="/"
              className="border-b-2 border-blue-600 py-7 font-semibold text-blue-600"
            >
              ✈ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              ▣ Otel
            </a>

            <a
              href="/cars"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </a>

            <a
              href="/discover"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              ⚙ Keşfet
            </a>
          </nav>

          {/* RIGHT MENU */}
          <div className="flex items-center gap-4">

            <a
              href="/contact"
              className="hidden font-medium text-slate-700 transition hover:text-blue-600 md:block"
            >
              ♧ Destek
            </a>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm"
            >
              🇹🇷 TR⌄
            </button>

            <a
              href="/login"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-blue-50"
            >
              ♙
            </a>
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* HERO                                                   */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">

          {/* HERO TEXT */}
          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              UçGit ile seyahat et
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Uçuşunu karşılaştır,
              <br />
              <span className="text-blue-600">
                en uygun fiyatı uçur!
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Yüzlerce havayolu ve seyahat sitesini anında karşılaştır,
              en uygun uçak bileti fiyatını bul.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-700">

              <span>◉ Ücretsiz karşılaştırma</span>

              <span>▣ Güvenli ödeme</span>

              <span>◷ 7/24 destek</span>

            </div>
          </div>

          {/* ================================================= */}
          {/* TRAVELPAYOUTS SEARCH                              */}
          {/* ================================================= */}

          <div className="mt-12 rounded-[30px] bg-white p-5 shadow-2xl ring-1 ring-slate-200 md:p-7">

            {/* BU ID'YE DOKUNMADIK */}
            <div
              id="tpwl-search"
              className="w-full min-h-[180px]"
            />

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* SEARCH RESULTS                                        */}
      {/* ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          {/* BU ID'YE DE DOKUNMADIK */}
          <div
            id="tpwl-tickets"
            className="w-full min-h-[100px]"
          />

        </div>
      </section>

      {/* ===================================================== */}
      {/* FEATURES                                               */}
      {/* ===================================================== */}

      <section className="border-y border-slate-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">

          <Feature
            icon="◇"
            title="En Uygun Fiyatlar"
            text="Yüzlerce siteyi karşılaştır, en iyi fiyatı bul."
          />

          <Feature
            icon="♢"
            title="Güvenli Alışveriş"
            text="SSL sertifikalı altyapımız ile güvenli ödeme."
          />

          <Feature
            icon="◷"
            title="Hızlı ve Kolay"
            text="Saniyeler içinde yüzlerce seçeneği karşılaştır."
          />

          <Feature
            icon="♧"
            title="7/24 Destek"
            text="Her zaman yanınızdayız, desteğimiz 7/24 sizinle."
          />

        </div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER                                                 */}
      {/* ===================================================== */}

      <footer className="bg-white">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4">

          {/* BRAND */}
          <div>

            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-20 w-auto object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Seyahatinizin en kolay yolu.
            </p>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="mb-5 font-bold text-slate-900">
              Şirket
            </h3>

            <div className="space-y-3 text-sm text-slate-500">

              <a
                href="/about"
                className="block transition hover:text-blue-600"
              >
                Hakkımızda
              </a>

              <a
                href="/career"
                className="block transition hover:text-blue-600"
              >
                Kariyer
              </a>

              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                İletişim
              </a>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="mb-5 font-bold text-slate-900">
              Destek
            </h3>

            <div className="space-y-3 text-sm text-slate-500">

              <a
                href="/faq"
                className="block transition hover:text-blue-600"
              >
                SSS
              </a>

              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                Bize Ulaşın
              </a>

              <a
                href="/privacy-policy"
                className="block transition hover:text-blue-600"
              >
                Gizlilik Politikası
              </a>

            </div>

          </div>

          {/* EXPLORE */}
          <div>

            <h3 className="mb-5 font-bold text-slate-900">
              Keşfet
            </h3>

            <div className="space-y-3 text-sm text-slate-500">

              <a
                href="/flights"
                className="block transition hover:text-blue-600"
              >
                Popüler Rotalar
              </a>

              <a
                href="/blog"
                className="block transition hover:text-blue-600"
              >
                Blog
              </a>

              <a
                href="/travel-guide"
                className="block transition hover:text-blue-600"
              >
                Seyahat Rehberi
              </a>

            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-100">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">

            <span>
              © 2026 UçGit. Tüm hakları saklıdır.
            </span>

            <div className="flex gap-5">
              <span>Instagram</span>
              <span>X</span>
              <span>LinkedIn</span>
            </div>

            <span>
              Built by Melih İzzet Zorluoğlu
            </span>

          </div>
        </div>

      </footer>
    </main>
  );
}

/* ========================================================= */
/* FEATURE COMPONENT                                         */
/* ========================================================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
        {icon}
      </div>

      <div>

        <h3 className="font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>

      </div>
    </div>
  );
}
