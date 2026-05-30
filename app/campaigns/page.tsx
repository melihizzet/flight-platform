export default function CampaignsPage() {

  const campaigns = [
    {
      title: "Antalya Uçuşlarında Büyük İndirim",
      desc: "Yaz sezonu için en uygun Antalya uçak biletlerini keşfet.",
      price: "1.499₺",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      link: "https://www.ucgit.com",
    },

    {
      title: "Dubai Seyahat Fırsatları",
      desc: "Dubai uçuşlarında sınırlı süreli özel fiyatlar.",
      price: "5.890₺",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      link: "https://www.ucgit.com",
    },

    {
      title: "Avrupa Şehirlerinde Ucuz Uçuşlar",
      desc: "Paris, Amsterdam ve Roma için avantajlı biletler.",
      price: "2.999₺",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      link: "https://www.ucgit.com",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">

        <p className="text-blue-400 text-base font-semibold">
          Kampanyalar
        </p>

        <h1 className="text-2xl md:text-5xl leading-tight font-black mt-6">
          En iyi uçuş <span className="text-blue-500">fırsatları</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          En popüler destinasyonlar için güncel uçuş kampanyalarını keşfet.
        </p>

      </section>

      {/* CAMPAIGNS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {campaigns.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="h-60 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-6">

                <p className="text-blue-400 font-semibold text-sm">
                  Başlayan fiyat
                </p>

                <h3 className="text-3xl font-black mt-2">
                  {item.price}
                </h3>

                <h2 className="text-xl font-bold mt-5 leading-snug">
                  {item.title}
                </h2>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  className="mt-6 inline-flex bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold"
                >
                  Kampanyayı İncele
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}