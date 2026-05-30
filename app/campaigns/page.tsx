import Script from "next/script";

export default function CampaignsPage() {

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">

        <p className="text-blue-400 text-base font-semibold">
          Kampanyalar
        </p>

        <h1 className="text-2xl md:text-4xl leading-tight font-black mt-6">
          En iyi uçuş <span className="text-blue-500">fırsatları</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          Havayollarının güncel kampanyalarını keşfet.
        </p>

      </section>

      {/* WIDGET */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        {/* Travelpayouts Widget */}
        <Script
          src="https://tpwdg.com/content?currency=try&trs=533807&shmarker=733574&locale=tr&powered_by=true&limit=4&primary_color=00AE98&results_background_color=020817&form_background_color=0F172A&promo_id=4563&campaign_id=111"
          strategy="afterInteractive"
        />

      </section>

    </main>
  );
}