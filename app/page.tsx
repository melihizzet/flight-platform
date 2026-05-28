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
        <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-[#020817]/90">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <span className="text-3xl">✈️</span>
              <h1 className="text-3xl font-black">UçGit.com</h1>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#">Kampanyalar</a>
              <a href="#">Blog</a>
              <a href="#">İletişim</a>
              <a href="#">Hakkımızda</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="text-sm text-white/80">
                Giriş Yap
              </button>

              <button className="bg-blue-500 hover:bg-blue-400 transition px-5 py-2 rounded-xl text-sm font-semibold">
                Kayıt Ol
              </button>
            </div>

          </div>
        </header>

        {/* HERO */}
        <section className="relative py-24 px-6">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_50%)]"></div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">

            <p className="text-blue-400 mb-6 text-sm">
              En uygun uçuşları saniyeler içinde bul
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              Ucuza uçmanın{" "}
              <span className="text-blue-500">en kolay yolu</span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16">
              Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör ve
              en uygun bileti hemen bul.
            </p>

            {/* SEARCH BOX */}
            <div className="max-w-6xl mx-auto">

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-2xl">

                <div id="tpwl-search"></div>

              </div>

              {/* RESULTS */}
              <div className="mt-10">
                <div id="tpwl-tickets"></div>
              </div>

            </div>

          </div>
        </section>

        {/* AIRLINES */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black">
              Popüler Havayolları
            </h2>

            <button className="text-blue-400 text-sm">
              Tümünü Gör
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {[
              {
                name: "THY",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Turkish_Airlines_logo_2019_compact.svg"
              },
              {
                name: "Pegasus",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Pegasus_Airlines_logo.svg/2560px-Pegasus_Airlines_logo.svg.png"
              },
              {
                name: "Lufthansa",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Lufthansa_Logo_2018.svg"
              },
              {
                name: "Qatar",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Qatar_Airways_Logo.svg"
              },
              {
                name: "Emirates",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
              },
              {
                name: "British Airways",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/British_Airways_Logo.svg/2560px-British_Airways_Logo.svg.png"
              }
            ].map((airline, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <div className="h-14 flex items-center justify-center mb-4">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="max-h-10 object-contain"
                  />
                </div>

                <p className="text-center text-sm font-semibold">
                  {airline.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-16">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">✈️</span>
                <h3 className="text-3xl font-black">UçGit.com</h3>
              </div>

              <p className="text-white/50 leading-relaxed">
                UçGit.com ile tüm havayollarını karşılaştırın ve en uygun uçuşları saniyeler içinde bulun.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-lg">Menü</h4>

              <div className="flex flex-col gap-3 text-white/50">
                <a href="#">Kampanyalar</a>
                <a href="#">Blog</a>
                <a href="#">İletişim</a>
                <a href="#">Hakkımızda</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-lg">Destek</h4>

              <div className="flex flex-col gap-3 text-white/50">
                <a href="#">Sık Sorulan Sorular</a>
                <a href="#">Gizlilik Politikası</a>
                <a href="#">Kullanım Şartları</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-lg">İletişim</h4>

              <div className="flex flex-col gap-3 text-white/50">
                <p>support@ucgit.com</p>
                <p>info@ucgit.com</p>
              </div>
            </div>

          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40">
            © 2026 UçGit.com Tüm hakları saklıdır.
          </div>

        </footer>

      </main>
    </>
  );
}