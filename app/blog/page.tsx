 export default function BlogPage() {

  const posts = [
    {
      title: "2026’da En Ucuz Avrupa Rotaları",
      category: "Seyahat",
      read: "5 dk",
    },

    {
      title: "Uçak Bileti Alırken En İyi Saatler",
      category: "İpuçları",
      read: "4 dk",
    },

    {
      title: "Business Class mı Economy mi?",
      category: "Karşılaştırma",
      read: "6 dk",
    },

    {
      title: "Schengen Vizesi Nasıl Alınır?",
      category: "Vize",
      read: "8 dk",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* HERO */}
      <section className="relative max-w-[1600px] mx-auto px-8 pt-32 pb-24 text-center">

        <p className="text-blue-400 text-xl font-semibold">
          UçGit Blog
        </p>

        <h1 className="text-3xl md:text-5xl leading-tight font-black mt-8">

          Seyahat dünyasını
          <span className="text-blue-500"> keşfet</span>

        </h1>

        <p className="text-slate-400 text-lg text-xl mt-10 max-w-[900px] mx-auto">
          Uçuş ipuçları, kampanyalar ve seyahat rehberleri.
        </p>

      </section>

      {/* POSTS */}
      <section className="relative max-w-[1600px] mx-auto px-8 pb-32">

        <div className="grid lg:grid-cols-2 gap-8">

          {posts.map((post, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-[40px] overflow-hidden hover:border-blue-400/30 transition backdrop-blur-xl"
            >

              {/* IMAGE */}
              <div className="h-[280px] bg-gradient-to-br from-slate-700 to-slate-900"></div>

              {/* CONTENT */}
              <div className="p-10">

                <div className="flex items-center gap-4 mb-6">

                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold">
                    {post.category}
                  </span>

                  <span className="text-slate-400 text-sm">
                    {post.read}
                  </span>

                </div>

                <h2 className="text-4xl font-black leading-tight">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-lg mt-6 leading-relaxed">
                  Uçuş fırsatları, seyahat ipuçları ve yeni rotalar hakkında detaylı içerikleri keşfet.
                </p>

                <button className="mt-8 bg-blue-500 hover:bg-blue-600 transition px-6 py-4 rounded-2xl font-bold">
                  Devamını Oku
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}