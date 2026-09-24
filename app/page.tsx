"use client";

import Script from "next/script";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr");
  const [languageOpen, setLanguageOpen] = useState(false);

  const isEnglish = language === "en";

  const text = {
    tr: {
      flights: "Uçuşlar",
      discover: "Keşfet",
      blog: "Blog",
      support: "Destek",

      travelWith: "UÇGİT İLE SEYAHAT ET",

      title1: "Uçuşunu karşılaştır,",
      title2: "en uygun fiyatı uçur!",

      description:
        "Yüzlerce havayolu ve seyahat sitesini anında karşılaştır, en uygun uçak bileti fiyatını bul.",

      free: "Ücretsiz karşılaştırma",
      secure: "Güvenilir Sağlayıcılar",
      support247: "Seyahat Desteği",

      bestPrices: "En Uygun Fiyatlar",
      bestPricesText:
        "Yüzlerce siteyi karşılaştır, en iyi fiyatı bul.",

      secureShopping: "Güvenilir Sağlayıcılar",
      secureShoppingText:
        "Güvenilir seyahat sağlayıcılarının seçeneklerini karşılaştırın.",

      fastEasy: "Hızlı ve Kolay",
      fastEasyText:
        "Saniyeler içinde yüzlerce seçeneği karşılaştır.",

      supportTitle: "Seyahat Desteği",
      supportText:
        "UçGit kullanımıyla ilgili sorularınız için bizimle iletişime geçin.",

      company: "Şirket",
      about: "Hakkımızda",
      contact: "İletişim",

      supportMenu: "Destek",
      faq: "SSS",
      contactUs: "Bize Ulaşın",
      privacy: "Gizlilik Politikası",

      explore: "Keşfet",
      popularRoutes: "Popüler Rotalar",
      travelGuide: "Seyahat Rehberi",

      slogan: "Seyahatinizin en kolay yolu.",
      rights: "Tüm hakları saklıdır.",
      built: "Built by Melih İzzet Zorluoğlu",

      turkish: "Türkçe",
      english: "English",
    },

    en: {
      flights: "Flights",
      discover: "Discover",
      blog: "Blog",
      support: "Support",

      travelWith: "TRAVEL WITH UÇGİT",

      title1: "Compare your flight,",
      title2: "fly at the best price!",

      description:
        "Compare hundreds of airlines and travel websites instantly and find the best flight price.",

      free: "Free comparison",
      secure: "Trusted Providers",
      support247: "Travel Support",

      bestPrices: "Best Prices",
      bestPricesText:
        "Compare hundreds of websites and find the best price.",

      secureShopping: "Trusted Providers",
      secureShoppingText:
        "Compare options from trusted travel providers.",

      fastEasy: "Fast & Easy",
      fastEasyText:
        "Compare hundreds of options in seconds.",

      supportTitle: "Travel Support",
      supportText:
        "Contact us if you have any questions about using UçGit.",

      company: "Company",
      about: "About Us",
      contact: "Contact",

      supportMenu: "Support",
      faq: "FAQ",
      contactUs: "Contact Us",
      privacy: "Privacy Policy",

      explore: "Explore",
      popularRoutes: "Popular Routes",
      travelGuide: "Travel Guide",

      slogan: "The easiest way to travel.",
      rights: "All rights reserved.",
      built: "Built by Melih İzzet Zorluoğlu",

      turkish: "Türkçe",
      english: "English",
    },
  }[language];

  return (
    <main
      className={
        inter.className +
        " min-h-screen bg-white text-slate-900 overflow-x-hidden"
      }
    >
      {/* ===================================================== */}
      {/* SEO                                                   */}
      {/* ===================================================== */}

      <title>
        {isEnglish
          ? "UçGit | Find the Best Flight Prices"
          : "UçGit | En Uygun Uçak Bileti Bul"}
      </title>

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
      {/* TRAVELPAYOUTS YAZI DÜZENLEMELERİ                       */}
      {/* ===================================================== */}

      <Script id="travelpayouts-text-fixes" strategy="afterInteractive">
        {`
          (function () {

            function fixTravelpayoutsTexts() {

              /* 2 yaş altı çocuk -> Bebek */
              var walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT
              );

              var nodes = [];

              while (walker.nextNode()) {
                nodes.push(walker.currentNode);
              }

              nodes.forEach(function (node) {

                var currentText = node.textContent
                  ? node.textContent.trim()
                  : "";

                var parent = node.parentElement;

                if (
                  currentText === "Çocuk" &&
                  parent &&
                  parent.parentElement &&
                  parent.parentElement.innerText &&
                  parent.parentElement.innerText.includes(
                    "2 yaş altı, kucakta"
                  )
                ) {
                  node.textContent = "Bebek";
                }
              });


              /* Seçme bilet -> Bileti seç */
              var buttons = document.querySelectorAll(
                "button, a"
              );

              buttons.forEach(function (button) {

                var buttonText = button.textContent
                  ? button.textContent.trim()
                  : "";

                if (
                  buttonText === "Seçme bilet" ||
                  buttonText.includes("Seçme bilet")
                ) {
                  button.textContent = "Bileti seç";
                  button.classList.add("ucgit-ticket-button");
                }

              });
            }

            fixTravelpayoutsTexts();

            var observer = new MutationObserver(function () {
              fixTravelpayoutsTexts();
            });

            observer.observe(document.body, {
              childList: true,
              subtree: true
            });

          })();
        `}
      </Script>

      {/* ===================================================== */}
      {/* ANIMATIONS + BİLET BUTONU STİLİ                       */}
      {/* ===================================================== */}

      <style jsx global>{`

        /* ===================================================== */
        /* PROFESYONEL UÇAK ANİMASYONU                          */
        /* ===================================================== */

        @keyframes planeFly {

          0% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }

          12% {
            transform:
              translate3d(2px, -1px, 0)
              rotate(-1deg)
              scale(1.01);
          }

          25% {
            transform:
              translate3d(5px, -4px, 0)
              rotate(-2deg)
              scale(1.015);
          }

          40% {
            transform:
              translate3d(9px, -7px, 0)
              rotate(-3deg)
              scale(1.025);
          }

          55% {
            transform:
              translate3d(12px, -8px, 0)
              rotate(-3deg)
              scale(1.03);
          }

          68% {
            transform:
              translate3d(10px, -6px, 0)
              rotate(-2deg)
              scale(1.02);
          }

          80% {
            transform:
              translate3d(6px, -3px, 0)
              rotate(-1deg)
              scale(1.01);
          }

          92% {
            transform:
              translate3d(2px, -1px, 0)
              rotate(0deg)
              scale(1);
          }

          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }
        }


        .animate-plane-fly {
          position: relative;
          display: inline-block;

          color: #2563eb;

          font-size: 17px;
          line-height: 1;

          transform-origin: center center;

          animation:
            planeFly
            3.8s
            cubic-bezier(0.45, 0, 0.55, 1)
            infinite;

          will-change: transform;

          filter:
            drop-shadow(
              0 3px 5px rgba(37, 99, 235, 0.15)
            );
        }


        /* Uçağın arkasındaki çok hafif hava izi */

        .animate-plane-fly::after {
          content: "";

          position: absolute;

          left: -10px;
          top: 50%;

          width: 9px;
          height: 2px;

          border-radius: 999px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(37, 99, 235, 0.22)
          );

          opacity: 0;

          transform:
            translateY(-50%)
            scaleX(0.5);

          transform-origin: right center;

          animation:
            planeTrail
            3.8s
            ease-in-out
            infinite;

          pointer-events: none;
        }


        @keyframes planeTrail {

          0%,
          15% {
            opacity: 0;
            transform:
              translateY(-50%)
              scaleX(0.3);
          }

          35%,
          65% {
            opacity: 0.65;
            transform:
              translateY(-50%)
              scaleX(1);
          }

          85%,
          100% {
            opacity: 0;
            transform:
              translateY(-50%)
              scaleX(0.3);
          }
        }


        /* Hareket azaltma tercihi */

        @media (prefers-reduced-motion: reduce) {

          .animate-plane-fly,
          .animate-plane-fly::after {
            animation: none !important;
          }

        }


        /* ===================================================== */
        /* BİLET SEÇ BUTONU                                      */
        /* ===================================================== */

        .ucgit-ticket-button {
          background: linear-gradient(
            135deg,
            #5b2cff 0%,
            #7428ff 100%
          ) !important;

          color: white !important;

          border: none !important;

          border-radius: 12px !important;

          min-height: 48px !important;

          padding: 0 28px !important;

          font-size: 15px !important;

          font-weight: 700 !important;

          cursor: pointer !important;

          box-shadow:
            0 8px 20px rgba(91, 44, 255, 0.18) !important;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease !important;
        }


        .ucgit-ticket-button:hover {
          transform: translateY(-1px) !important;

          box-shadow:
            0 10px 24px rgba(91, 44, 255, 0.25) !important;
        }

      `}</style>


      {/* ===================================================== */}
      {/* HEADER                                                 */}
      {/* ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <a href="/" className="flex items-center">

            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-10 w-auto object-contain"
            />

          </a>


          {/* MENU */}

          <nav className="hidden items-center gap-8 md:flex">

            {/* UÇUŞLAR */}

            <a
              href="/"
              className="border-b-2 border-blue-600 py-5 text-sm font-semibold text-blue-600"
            >

              <span className="mr-1 inline-block animate-plane-fly">
                ✈
              </span>

              {text.flights}

            </a>


            {/* KEŞFET */}

            <a
              href="/discover"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >

              <span className="mr-1">
                🌍
              </span>

              {text.discover}

            </a>


            {/* BLOG */}

            <a
              href="/blog"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >

              <span className="mr-1">
                📝
              </span>

              {text.blog}

            </a>

          </nav>


          {/* SAĞ MENÜ */}

          <div className="flex items-center gap-3">

            {/* DESTEK */}

            <a
              href="/contact"
              className="hidden text-sm font-medium text-slate-700 transition hover:text-blue-600 md:block"
            >
              ♧ {text.support}
            </a>


            {/* DİL */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setLanguageOpen(!languageOpen)
                }
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >

                {isEnglish
                  ? "🇬🇧 EN"
                  : "🇹🇷 TR"}

                ⌄

              </button>


              {languageOpen && (

                <div className="absolute right-0 top-10 z-[100] w-36 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">

                  {/* TÜRKÇE */}

                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("tr");
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-blue-50 ${
                      language === "tr"
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700"
                    }`}
                  >

                    🇹🇷 {text.turkish}

                  </button>


                  {/* ENGLISH */}

                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("en");
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-blue-50 ${
                      language === "en"
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700"
                    }`}
                  >

                    🇬🇧 {text.english}

                  </button>

                </div>

              )}

            </div>


            {/* LOGIN */}

            <a
              href="/login"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-base transition hover:bg-blue-50"
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

        {/* BACKGROUND */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85')",
          }}
        />


        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />


        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 md:pb-10 md:pt-9">

          {/* HERO TEXT */}

          <div className="max-w-2xl">

            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
              {text.travelWith}
            </p>


            <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-5xl">

              {text.title1}

              <br />

              <span className="text-blue-600">
                {text.title2}
              </span>

            </h1>


            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              {text.description}
            </p>


            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-700">

              <span>
                ◉ {text.free}
              </span>

              <span>
                ▣ {text.secure}
              </span>

              <span>
                ◷ {text.support247}
              </span>

            </div>

          </div>


          {/* ================================================= */}
          {/* TRAVELPAYOUTS SEARCH                              */}
          {/* ================================================= */}

          <div className="mt-6 rounded-[22px] bg-white p-3 shadow-2xl ring-1 ring-slate-200 md:p-4">

            <div
              id="tpwl-search"
              className="w-full min-h-[130px]"
            />

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* SEARCH RESULTS                                        */}
      {/* ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-4">

          <div
            id="tpwl-tickets"
            className="w-full min-h-[40px]"
          />

        </div>

      </section>


      {/* ===================================================== */}
      {/* FEATURES                                               */}
      {/* ===================================================== */}

      <section className="border-y border-slate-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-5 md:grid-cols-4">

          <Feature
            icon="◇"
            title={text.bestPrices}
            text={text.bestPricesText}
          />


          <Feature
            icon="♢"
            title={text.secureShopping}
            text={text.secureShoppingText}
          />


          <Feature
            icon="◷"
            title={text.fastEasy}
            text={text.fastEasyText}
          />


          <Feature
            icon="♧"
            title={text.supportTitle}
            text={text.supportText}
          />

        </div>

      </section>


      {/* ===================================================== */}
      {/* FOOTER                                                 */}
      {/* ===================================================== */}

      <footer className="bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 md:grid-cols-4">

          {/* BRAND */}

          <div>

            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
              {text.slogan}
            </p>

          </div>


          {/* COMPANY */}

          <div>

            <h3 className="mb-2 text-sm font-bold text-slate-900">
              {text.company}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-500">

              <a
                href="/about"
                className="block transition hover:text-blue-600"
              >
                {text.about}
              </a>


              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                {text.contact}
              </a>

            </div>

          </div>


          {/* SUPPORT */}

          <div>

            <h3 className="mb-2 text-sm font-bold text-slate-900">
              {text.supportMenu}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-500">

              <a
                href="/faq"
                className="block transition hover:text-blue-600"
              >
                {text.faq}
              </a>


              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                {text.contactUs}
              </a>


              <a
                href="/privacy-policy"
                className="block transition hover:text-blue-600"
              >
                {text.privacy}
              </a>

            </div>

          </div>


          {/* EXPLORE */}

          <div>

            <h3 className="mb-2 text-sm font-bold text-slate-900">
              {text.explore}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-500">

              <a
                href="/flights"
                className="block transition hover:text-blue-600"
              >
                {text.popularRoutes}
              </a>


              <a
                href="/blog"
                className="block transition hover:text-blue-600"
              >
                {text.blog}
              </a>


              <a
                href="/travel-guide"
                className="block transition hover:text-blue-600"
              >
                {text.travelGuide}
              </a>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-slate-100">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-[11px] text-slate-400 md:flex-row">

            <span>
              © 2026 UçGit. {text.rights}
            </span>


            <div className="flex gap-4">

              <span>
                Instagram
              </span>

              <span>
                X
              </span>

              <span>
                LinkedIn
              </span>

            </div>


            <span>
              {text.built}
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
    <div className="flex gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-600">
        {icon}
      </div>


      <div>

        <h3 className="text-sm font-bold text-slate-900">
          {title}
        </h3>


        <p className="mt-0.5 text-xs leading-5 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
}
