"use client";

import { useEffect } from "react";

export default function HomePage() {

  useEffect(() => {

    if (!document.getElementById("tpwl-script")) {

      const script = document.createElement("script");

      script.id = "tpwl-script";
      script.async = true;
      script.type = "module";
      script.src = "https://tpwdg.com/wl_web/main.js?wl_id=18030";

      document.body.appendChild(script);
    }

  }, []);

  return (
    <main className="bg-[#020817] text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="text-3xl">✈️</span>

            <span className="text-4xl font-black">
              UçGit
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-white/80">

            <a href="#">Kampanyalar</a>
            <a href="#">Blog</a>
            <a href="#">İletişim</a>
            <a href="#">Hakkımızda</a>

          </nav>

          <div className="flex items-center gap-4">

            <button className="text-white/80">
              Giriş Yap
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-semibold">
              Kayıt Ol
            </button>

          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-blue-400 mb-6 text-lg">
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">

            Ucuza uçmanın{" "}

            <span className="text-blue-500">
              en kolay yolu
            </span>

          </h1>

          <p className="mt-8 text-xl text-white/70">
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör ve
            en uygun bileti hemen bul.
          </p>

        </div>

      </section>

      {/* SEARCH WIDGET */}
      <section className="w-full px-6 mb-20">

        <div className="max-w-7xl mx-auto">

          <div className="rounded-3xl overflow-hidden">

            <div id="tpwl-search"></div>

          </div>

        </div>

      </section>

      {/* AIRLINES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">
            Popüler Havayolları
          </h2>

          <a href="#" className="text-blue-400">
            Tümünü Gör
          </a>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {[
            "THY",
            "Pegasus",
            "Lufthansa",
            "Qatar",
            "Emirates",
            "British Airways",
          ].map((airline) => (

            <div
              key={airline}
              className="h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold"
            >

              {airline}

            </div>

          ))}

        </div>

      </section>

      {/* RESULTS */}
      <section className="w-full px-6 mb-24">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-5xl font-black">
              En Popüler Rotalar
            </h2>

            <a href="#" className="text-blue-400">
              Tümünü Gör
            </a>

          </div>

          <div className="rounded-3xl overflow-hidden">

            <div id="tpwl-tickets"></div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <span className="text-2xl">✈️</span>

              <span className="text-3xl font-black">
                UçGit
              </span>

            </div>

            <p className="text-white/60 leading-relaxed">
              UçGit ile tüm havayollarını karşılaştırın ve en uygun uçuşu saniyeler içinde bulun.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-4">
              Menü
            </h3>

            <div className="space-y-2 text-white/60">

              <p>Kampanyalar</p>
              <p>Blog</p>
              <p>İletişim</p>
              <p>Hakkımızda</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-4">
              Destek
            </h3>

            <div className="space-y-2 text-white/60">

              <p>Sık Sorulan Sorular</p>
              <p>Gizlilik Politikası</p>
              <p>Kullanım Şartları</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-4">
              İletişim
            </h3>

            <div className="space-y-2 text-white/60">

              <p>support@ucgit.com</p>
              <p>info@ucgit.com</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-white/40">

          © 2026 UçGit. Tüm hakları saklıdır.

        </div>

      </footer>

    </main>
  );
}