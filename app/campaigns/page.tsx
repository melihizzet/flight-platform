"use client";

import Script from "next/script";

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="py-16 px-4 text-center">

        <p className="text-blue-400 uppercase tracking-[0.2em] text-[10px] mb-3">
          Kampanyalar
        </p>

        <h1 className="text-3xl md:text-5xl font-black mb-4">
          En iyi uçuş fırsatları
        </h1>

        <p className="text-sm text-white/60 max-w-xl mx-auto">
          Güncel uçuş kampanyalarını keşfet ve avantajlı fiyatları yakala.
        </p>

      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="pb-6 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="rounded-[28px] overflow-hidden">

            <Script
              strategy="afterInteractive"
              src="https://tpwdg.com/content?currency=try&trs=533807&shmarker=733574&locale=tr&powered_by=true&from_name=istanbul_tr&limit=6&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111"
            />

          </div>

        </div>

      </section>

    </main>
  );
}