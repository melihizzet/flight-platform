"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="text-3xl">✈️</span>
            <span className="text-3xl font-black">UçGit</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#">Kampanyalar</a>
            <a href="#">Blog</a>
            <a href="#">İletişim</a>
            <a href="#">Hakkımızda</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-white">Giriş Yap</button>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl font-semibold">
              Kayıt Ol
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-24 pb-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto text-center">

          <p className="text-blue-400 text-sm mb-5">
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Ucuza uçmanın{" "}
            <span className="text-blue-500">en kolay yolu</span>
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
            ve en uygun bileti hemen bul.
          </p>

          {/* TRAVELPAYOUTS */}
          <div className="mt-14 max-w-6xl mx-auto">

            <div className="bg-[#111827]/90 border border-white/10 rounded-[32px] p-5 shadow-2xl backdrop-blur-xl">

              <div className="travel-widget rounded-2xl overflow-hidden">
                <div id="tpwl-search"></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* AIRLINES */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black">
              Popüler Havayolları
            </h2>

            <button className="text-blue-400">
              Tümünü Gör
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

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
                className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex items-center justify-center text-center hover:border-blue-500 transition"
              >
                <span className="font-bold text-lg">
                  {airline}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black">
              En Popüler Rotalar
            </h2>

            <button className="text-blue-400">
              Tümünü Gör
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                city: "Amsterdam",
                image:
                  "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200&auto=format&fit=crop",
                price: "2490₺",
              },
              {
                city: "Dubai",
                image:
                  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
                price: "6490₺",
              },
              {
                city: "Paris",
                image:
                  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
                price: "3190₺",
              },
              {
                city: "Londra",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
                price: "3890₺",
              },
            ].map((route) => (
              <div
                key={route.city}
                className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition"
              >
                <img
                  src={route.image}
                  alt={route.city}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black">
                      {route.city}
                    </h3>

                    <span className="text-blue-400 text-sm">
                      Başlayan fiyat
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-3xl font-black text-blue-400">
                      {route.price}
                    </span>

                    <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold">
                      Uçuşları Gör
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SEARCH RESULTS */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">

          <div
            className="travel-results rounded-3xl overflow-hidden"
          >
            <div id="tpwl-tickets"></div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">✈️</span>
              <span className="text-2xl font-black">UçGit</span>
            </div>

            <p className="text-gray-400 leading-7">
              UçGit ile tüm havayollarını karşılaştırın ve
              en uygun uçuşları saniyeler içinde bulun.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Menü</h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Kampanyalar</a>
              <a href="#">Blog</a>
              <a href="#">İletişim</a>
              <a href="#">Hakkımızda</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Destek</h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Sık Sorulan Sorular</a>
              <a href="#">Gizlilik Politikası</a>
              <a href="#">Kullanım Şartları</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">İletişim</h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <span>support@ucgit.com</span>
              <span>info@ucgit.com</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-500">
          © 2026 UçGit. Tüm hakları saklıdır.
        </div>
      </footer>

      {/* GLOBAL FIX */}
      <style jsx global>{`
        body {
          overflow-x: hidden;
          background: #020817;
        }

        .travel-widget iframe,
        .travel-results iframe {
          width: 100% !important;
          border: none !important;
          border-radius: 24px !important;
        }

        .travel-widget,
        .travel-results {
          width: 100%;
          overflow: hidden;
        }

        #tpwl-search,
        #tpwl-tickets {
          width: 100%;
        }
      `}</style>
    </main>
  );
}