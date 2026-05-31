export default function TermsPage() {

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-10">

      {/* LOGO */}
      <a
        href="/"
        className="flex items-center gap-3 mb-10"
      >

        <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

          <span className="text-blue-400 text-sm rotate-[-25deg]">
            ✈️
          </span>

        </div>

        <h1 className="text-xl font-black tracking-tight">
          Uç<span className="text-blue-500">Git</span>
        </h1>

      </a>

      <div className="max-w-2xl mx-auto">

        <p className="text-blue-400 text-[10px] tracking-[0.25em] uppercase mb-2">
          Yasal
        </p>

        <h1 className="text-xl md:text-3xl font-black leading-tight mb-8">
          Kullanım Şartları
        </h1>

        <div className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed">

          <div>

            <h2 className="text-base md:text-lg font-black text-white mb-2">
              Hizmet Kullanımı
            </h2>

            <p>
              UçGit, kullanıcıların uçuşları karşılaştırabilmesi ve seyahat
              fırsatlarını keşfedebilmesi için hizmet sunmaktadır.
            </p>

          </div>

          <div>

            <h2 className="text-base md:text-lg font-black text-white mb-2">
              Sorumluluk Reddi
            </h2>

            <p>
              UçGit üzerinden gösterilen fiyatlar ve teklifler üçüncü taraf
              sağlayıcılardan alınmaktadır. Fiyat değişikliklerinden UçGit
              sorumlu değildir.
            </p>

          </div>

          <div>

            <h2 className="text-base md:text-lg font-black text-white mb-2">
              Kullanıcı Sorumluluğu
            </h2>

            <p>
              Kullanıcılar, siteyi yasalara uygun şekilde kullanmayı kabul eder.
            </p>

          </div>

          <div>

            <h2 className="text-base md:text-lg font-black text-white mb-2">
              Üçüncü Taraf Bağlantılar
            </h2>

            <p>
              UçGit, kullanıcıları farklı rezervasyon ve seyahat sitelerine
              yönlendirebilir. Bu sitelerin içeriklerinden UçGit sorumlu
              değildir.
            </p>

          </div>

          <div>

            <h2 className="text-base md:text-lg font-black text-white mb-2">
              Değişiklik Hakkı
            </h2>

            <p>
              UçGit, kullanım şartlarını herhangi bir zamanda güncelleme hakkını
              saklı tutar.
            </p>

          </div>

        </div>

        {/* FOOT */}
        <div className="mt-10 pt-5 border-t border-white/10 text-white/40 text-xs">
          ✈️ UçGit.com
        </div>

      </div>

    </main>
  );
}