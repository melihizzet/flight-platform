"use client";

import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* TRAVELPAYOUTS */}
      <Script
        src="https://tpwdg.com/content?currency=try&trs=575014&shmarker=575014&locale=tr&powered_by=true&border_radius=16&plain=false&color_background=%23020817&color_button=%233b82f6&color_button_text=%23ffffff&promo_id=3414&campaign_id=100"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-[#020817] text-white">

        {/* HEADER */}
        <header className="border-b border-white/10 bg-[#020817] sticky top-0 z-50">

          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* LOGO */}
            <div>
              <h1 className="text-3xl font-black text-white">
                ✈️ UçGit.com
              </h1>

              <p className="text-white/50 text-sm mt-2">
                En uygun uçuşları saniyeler içinde bul.
              </p>
            </div>

            {/* MENU */}
            <div className="flex items-center gap-8 text-white/70">

              <a href="#">Kampanyalar</a>

              <a href="#">Blog</a>

              <a href="#">İletişim</a>

              <button className="text-white">
                Giriş Yap
              </button>

              <button className="bg-blue-500 px-5 py-2 rounded-xl">
                Kayıt Ol
              </button>

            </div>

          </div>

        </header>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h1 className="text-6xl font-black mb-6">
            En uygun uçuşları bul
          </h1>

          <p className="text-white/60 text-xl mb-12">
            Gerçek zamanlı fiyatları karşılaştır ve en uygun bileti hemen al.
          </p>

          {/* TRAVELPAYOUTS WIDGET */}
          <div className="bg-white rounded-[24px] overflow-hidden p-5">

            <div
              className="travelpayouts-widget"
              data-widget-type="flight"
              data-width="100%"
              data-marker="575014"
              data-language="tr"
              data-currency="try"
              data-host="search.aviasales.com"
            ></div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 mt-20">

          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

            <div>

              <h3 className="text-2xl font-black mb-4">
                ✈️ UçGit.com
              </h3>

              <p className="text-white/50">
                Tüm havayollarını karşılaştır ve en uygun uçuşları bul.
              </p>

            </div>

            <div>

              <h4 className="font-bold mb-4">
                Menü
              </h4>

              <div className="flex flex-col gap-2 text-white/50">

                <a href="#">Kampanyalar</a>

                <a href="#">Blog</a>

                <a href="#">İletişim</a>

              </div>

            </div>

            <div>

              <h4 className="font-bold mb-4">
                Destek
              </h4>

              <div className="flex flex-col gap-2 text-white/50">

                <a href="#">SSS</a>

                <a href="#">Gizlilik</a>

                <a href="#">Şartlar</a>

              </div>

            </div>

            <div>

              <h4 className="font-bold mb-4">
                İletişim
              </h4>

              <div className="flex flex-col gap-2 text-white/50">

                <p>support@ucgit.com</p>

                <p>info@ucgit.com</p>

              </div>

            </div>

          </div>

          <div className="border-t border-white/10 text-center py-6 text-white/40">
            © 2026 UçGit.com
          </div>

        </footer>

      </main>
    </>
  );
}