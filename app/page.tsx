"use client";

import { useEffect } from "react";

export default function HomePage() {

  useEffect(() => {

    const timer = setTimeout(() => {

      if (!document.getElementById("tp-script")) {

        const script = document.createElement("script");

        script.id = "tp-script";
        script.async = true;
        script.type = "module";
        script.src = "https://tpwdg.com/wl_web/main.js?wl_id=18030";

        document.body.appendChild(script);
      }

    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="border-b border-white/10 sticky top-0 z-50 bg-[#020817]/90 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="text-3xl">✈️</span>

            <span className="text-4xl font-black tracking-tight">
              UçGit
            </span>

          </div>

          <div className="hidden md:flex items-center gap-10 text-lg text-white/80">

            <a href="#" className="hover:text-white transition">
              Kampanyalar
            </a>

            <a href="#" className="hover:text-white transition">
              Blog
            </a>

            <a href="#" className="hover:text-white transition">
              İletişim
            </a>

            <a href="#" className="hover:text-white transition">
              Hakkımızda
            </a>

          </div>

          <div className="flex items-center gap-4">

            <button className="text-white/90 font-medium hover:text-white">
              Giriş Yap
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-semibold">
              Kayıt Ol
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">

          <div className="text-center max-w-5xl mx-auto">

            <p className="text-blue-400 text-lg mb-6">
              En uygun uçuşları saniyeler içinde bul
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">

              Ucuza uçmanın{" "}

              <span className="text-blue-500">
                en kolay yolu
              </span>

            </h1>

            <p className="mt-8 text-2xl text-white/70 leading-relaxed">
              Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör ve
              en uygun bileti hemen bul.
            </p>

          </div>

          {/* SEARCH */}
          <div className="mt-16 max-w-6xl mx-auto">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl min-h-[220px] flex items-center">

              <div
                id="tpwl-search"
                className="w-full"
              ></div>

            </div>

          </div>

        </div>

      </section>

      {/* AIRLINES */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-5xl font-black">
            Popüler Havayolları
          </h2>

          <a href="#" className="text-blue-400 hover:text-blue-300">
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
              className="bg-white/5 border border-white/10 rounded-3xl h-36 flex items-center justify-center text-2xl font-bold hover:bg-white/10 transition"
            >

              {airline}

            </div>

          ))}

        </div>

      </section>

      {/* TICKETS */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">
            En Popüler Rotalar
          </h2>

          <a href="#" className="text-blue-400 hover:text-blue-300">
            Tümünü Gör
          </a>

        </div>

        <div
          id="tpwl-tickets"
          className="min-h-[500px] w-full"
        ></div>

      </section>

      <div className="h-20"></div>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

          <div>

            <div className="flex items-center gap-3 mb-5">

              <span className="text-2xl">✈️</span>

              <span className="text-3xl font-black">
                UçGit
              </span>

            </div>

            <p className="text-white/60 leading-relaxed text-lg">
              UçGit ile tüm havayollarını karşılaştırın ve en uygun uçuşu saniyeler içinde bulun.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-2xl mb-5">
              Menü
            </h3>

            <div className="space-y-3 text-white/60 text-lg">

              <p>Kampanyalar</p>
              <p>Blog</p>
              <p>İletişim</p>
              <p>Hakkımızda</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-2xl mb-5">
              Destek
            </h3>

            <div className="space-y-3 text-white/60 text-lg">

              <p>Sık Sorulan Sorular</p>
              <p>Gizlilik Politikası</p>
              <p>Kullanım Şartları</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-2xl mb-5">
              İletişim
            </h3>

            <div className="space-y-3 text-white/60 text-lg">

              <p>support@ucgit.com</p>
              <p>info@ucgit.com</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-8 text-center text-white/40">

          © 2026 UçGit. Tüm hakları saklıdır.

        </div>

      </footer>

    </main>
  );
}