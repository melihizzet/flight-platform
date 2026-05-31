export default function PrivacyPolicyPage() {

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-14">

      {/* LOGO */}
      <a
        href="/"
        className="flex items-center gap-3 mb-12"
      >

        <div className="w-9 h-9 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

          <span className="text-blue-400 text-lg rotate-[-25deg]">
            ✈️
          </span>

        </div>

        <h1 className="text-2xl font-black tracking-tight">
          Uç<span className="text-blue-500">Git</span>
        </h1>

      </a>

      <div className="max-w-3xl mx-auto">

        <p className="text-blue-400 text-[11px] tracking-[0.25em] uppercase mb-3">
          Yasal
        </p>

        <h1 className="text-2xl md:text-4xl font-black leading-tight mb-8">
          Gizlilik Politikası
        </h1>

        <div className="space-y-5 text-white/60 text-sm md:text-base leading-relaxed">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

            <h2 className="text-base md:text-lg font-black text-white mb-3">
              Toplanan Bilgiler
            </h2>

            <p>
              UçGit, kullanıcı deneyimini geliştirmek amacıyla temel kullanım
              verilerini ve analiz bilgilerini toplayabilir.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

            <h2 className="text-base md:text-lg font-black text-white mb-3">
              Çerezler
            </h2>

            <p>
              Web sitemiz, performansı artırmak ve kullanıcı tercihlerini
              hatırlamak için çerezler kullanabilir.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

            <h2 className="text-base md:text-lg font-black text-white mb-3">
              Üçüncü Taraf Hizmetler
            </h2>

            <p>
              UçGit, uçuş sonuçlarını göstermek için üçüncü taraf iş ortakları
              ve seyahat sağlayıcılarıyla çalışabilir.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

            <h2 className="text-base md:text-lg font-black text-white mb-3">
              Veri Güvenliği
            </h2>

            <p>
              Kullanıcı bilgilerinin korunması için gerekli teknik ve güvenlik
              önlemleri uygulanmaktadır.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

            <h2 className="text-base md:text-lg font-black text-white mb-3">
              İletişim
            </h2>

            <p>
              Gizlilik politikasıyla ilgili sorularınız için
              support@ucgit.com adresinden bize ulaşabilirsiniz.
            </p>

          </div>

        </div>

        {/* FOOT */}
        <div className="mt-12 pt-6 border-t border-white/10 text-white/40 text-sm">
          ✈️ UçGit.com
        </div>

      </div>

    </main>
  );
}