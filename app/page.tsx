"use client";

import Script from "next/script";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* TRAVELPAYOUTS */}
      <Script id="travelpayouts-widget" strategy="afterInteractive">
        {`
          (function () {
            var script = document.createElement("script");
            script.async = 1;
            script.type = "module";
            script.src = "https://tpwdg.com/wl_web/main.js?wl_id=18030";
            document.head.appendChild(script);
          })();
        `}
      </Script>

      <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
        
        {/* HEADER */}
        <header className="w-full border-b border-white/10 backdrop-blur-xl bg-black/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">✈️</span>
              <span className="text-3xl font-black tracking-tight">
                UçGit
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#">Kampanyalar</a>
              <a href="#">Blog</a>
              <a href="#">İletişim</a>
              <a href="#">Hakkımızda</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white transition">
                Giriş Yap
              </button>

              <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold transition">
                Kayıt Ol
              </button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="relative py-24 px-6">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_55%)]"></div>

          <div className="relative max-w-7xl mx-auto">

            <div className="text-center mb-14">
              <p className="text-blue-400 mb-4 text-sm">
                En uygun uçuşları saniyeler içinde bul
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Ucuza uçmanın{" "}
                <span className="text-blue-500">
                  en kolay yolu
                </span>
              </h1>

              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
                ve en uygun bileti hemen bul.
              </p>
            </div>

            {/* TRAVELPAYOUTS SEARCH */}
            <div className="bg-[#111827] border border-white/10 rounded-[32px] p-3 shadow-2xl overflow-hidden">
              
              <div
                style={{
                  isolation: "isolate",
                }}
              >
                <div id="tpwl-search"></div>
              </div>

            </div>

            {/* RESULTS */}
            <div
              className="mt-10"
              style={{
                isolation: "isolate",
              }}
            >
              <div id="tpwl-tickets"></div>
            </div>

          </div>
        </section>

        {/* AIRLINES */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          
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
              {
                name: "THY",
                logo: "https://1000logos.net/wp-content/uploads/2020/03/Turkish-Airlines-logo.png",
              },
              {
                name: "Pegasus",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pegasus_Airlines_logo.svg",
              },
              {
                name: "Lufthansa",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Lufthansa_Logo_2018.svg",
              },
              {
                name: "Qatar",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Qatar_Airways_Logo.svg",
              },
              {
                name: "Emirates",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
              },
              {
                name: "British Airways",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/British_Airways_Logo.svg",
              },
            ].map((airline) => (
              <div
                key={airline.name}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="max-h-10 object-contain"
                  />
                </div>

                <p className="text-center font-medium text-white/80">
                  {airline.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* POPULAR ROUTES */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          
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
                airline: "Pegasus",
                price: "2490₺",
              },
              {
                city: "Dubai",
                image:
                  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
                airline: "Emirates",
                price: "6490₺",
              },
              {
                city: "Paris",
                image:
                  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
                airline: "Air France",
                price: "3190₺",
              },
              {
                city: "Londra",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
                airline: "THY",
                price: "3890₺",
              },
            ].map((route) => (
              <div
                key={route.city}
                className="group overflow-hidden rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/40 transition"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black">
                      {route.city}
                    </h3>

                    <span className="text-blue-400 text-sm">
                      {route.airline}
                    </span>
                  </div>

                  <p className="text-white/50 mb-4">
                    İstanbul → {route.city}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-sm">
                        Başlayan fiyat
                      </p>

                      <p className="text-4xl font-black">
                        {route.price}
                      </p>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-2xl font-semibold transition">
                      Uçuşları Gör
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-14">
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✈️</span>

                <span className="text-2xl font-black">
                  UçGit
                </span>
              </div>

              <p className="text-white/50 leading-relaxed">
                UçGit ile tüm havayollarını karşılaştırın ve en uygun
                uçuşu saniyeler içinde bulun.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Menü</h4>

              <div className="space-y-3 text-white/60">
                <p>Kampanyalar</p>
                <p>Blog</p>
                <p>İletişim</p>
                <p>Hakkımızda</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Destek</h4>

              <div className="space-y-3 text-white/60">
                <p>Sık Sorulan Sorular</p>
                <p>Gizlilik Politikası</p>
                <p>Kullanım Şartları</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">İletişim</h4>

              <div className="space-y-3 text-white/60">
                <p>support@ucgit.com</p>
                <p>info@ucgit.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">
            © 2026 UçGit. Tüm hakları saklıdır.
          </div>
        </footer>

      </main>
    </>
  );
}