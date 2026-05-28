"use client";

import Script from "next/script";

export default function HomePage() {
  return (
    <>
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

      <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden">
        {/* HEADER */}
        <header className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="text-3xl font-black flex items-center gap-2">
              ✈️ UçGit
            </div>

            <nav className="hidden md:flex gap-10 text-sm text-white/80">
              <a href="#">Kampanyalar</a>
              <a href="#">Blog</a>
              <a href="#">İletişim</a>
              <a href="#">Hakkımızda</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-white/80">Giriş Yap</button>

              <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl font-semibold">
                Kayıt Ol
              </button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
            <div className="text-center">
              <p className="text-blue-400 mb-4">
                En uygun uçuşları saniyeler içinde bul
              </p>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Ucuza uçmanın{" "}
                <span className="text-blue-500">en kolay yolu</span>
              </h1>

              <p className="text-white/70 text-xl mt-8 max-w-3xl mx-auto">
                Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör ve
                en uygun bileti hemen bul.
              </p>
            </div>

            {/* SEARCH BOX */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <div
                  id="tpwl-search"
                  data-tpwl-mode="iframe"
                  style={{
                    width: "100%",
                    minHeight: "420px",
                  }}
                ></div>

              </div>
            </div>
          </div>
        </section>

        {/* AIRLINES */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black">Popüler Havayolları</h2>

            <button className="text-blue-400">Tümünü Gör</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "THY",
              "Pegasus",
              "Lufthansa",
              "Qatar",
              "Emirates",
              "British Airways",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-3xl h-32 flex items-center justify-center text-2xl font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ROUTES */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black">En Popüler Rotalar</h2>

            <button className="text-blue-400">Tümünü Gör</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: "Amsterdam",
                img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200&auto=format&fit=crop",
              },
              {
                city: "Dubai",
                img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
              },
              {
                city: "Paris",
                img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
              },
              {
                city: "Londra",
                img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((route) => (
              <div
                key={route.city}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
              >
                <img
                  src={route.img}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-black">{route.city}</h3>

                  <p className="text-white/60 mt-2">
                    İstanbul → {route.city}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-white/50 text-sm">
                        Başlayan fiyat
                      </p>

                      <p className="text-3xl font-black">2490₺</p>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold">
                      Uçuşları Gör
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-3xl font-black flex items-center gap-2">
                ✈️ UçGit
              </div>

              <p className="text-white/60 mt-5 leading-relaxed">
                UçGit ile tüm havayollarını karşılaştırın ve en uygun uçuşu
                saniyeler içinde bulun.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-5">Menü</h4>

              <div className="space-y-3 text-white/60">
                <p>Kampanyalar</p>
                <p>Blog</p>
                <p>İletişim</p>
                <p>Hakkımızda</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-5">Destek</h4>

              <div className="space-y-3 text-white/60">
                <p>Sık Sorulan Sorular</p>
                <p>Gizlilik Politikası</p>
                <p>Kullanım Şartları</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-5">İletişim</h4>

              <div className="space-y-3 text-white/60">
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
    </>
  );
}