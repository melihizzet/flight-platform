import Link from "next/link";

const posts = {
  "2026da-en-uygun-avrupa-rotalari": {
    title: "2026’da En Uygun Avrupa Rotaları",
    category: "Uçuş Fırsatları",
    date: "21 Eylül 2026",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Avrupa’da uygun fiyatlı bir seyahat planlamak için doğru rota ve doğru zamanı seçmek büyük fark yaratabilir.",
    sections: [
      {
        title: "Avrupa seyahatinde doğru zaman",
        text:
          "Uçuş fiyatları seyahat tarihine göre ciddi şekilde değişebilir. Hafta içi günleri, yoğun sezon dışındaki dönemler ve erken yapılan aramalar daha uygun seçeneklerle karşılaşmanıza yardımcı olabilir.",
      },
      {
        title: "Popüler rotalar",
        text:
          "Paris, Roma, Amsterdam, Berlin ve Prag gibi şehirler Türk gezginlerin sık tercih ettiği Avrupa rotaları arasında yer alıyor. Birden fazla havalimanını karşılaştırmak da fiyat seçeneklerini artırabilir.",
      },
      {
        title: "Uçuş ararken nelere dikkat edilmeli?",
        text:
          "Sadece bilet fiyatına değil, bagaj hakkına, aktarma süresine, havalimanının şehir merkezine uzaklığına ve toplam seyahat süresine de bakmak gerekir.",
      },
    ],
  },

  "paris-gezi-rehberi-ilk-kez-gideceklere-oneriler": {
    title: "Paris Gezi Rehberi: İlk Kez Gideceklere Öneriler",
    category: "Gezi Rehberi",
    date: "20 Eylül 2026",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Paris’i ilk kez ziyaret edecekseniz birkaç temel noktayı önceden planlamak seyahatinizi çok daha rahat hale getirebilir.",
    sections: [
      {
        title: "Paris’te görülmesi gereken yerler",
        text:
          "Eyfel Kulesi, Louvre Müzesi, Notre-Dame çevresi, Montmartre ve Champs-Élysées Paris seyahatinin öne çıkan durakları arasında bulunuyor.",
      },
      {
        title: "Ulaşım",
        text:
          "Paris’in metro ağı şehrin birçok noktasına ulaşmak için oldukça kullanışlıdır. Konaklama seçerken metro istasyonlarına yakın bölgeleri değerlendirmek zaman kazandırabilir.",
      },
      {
        title: "Seyahat önerisi",
        text:
          "Paris geziniz için birkaç günlük bir program hazırlamak, hem önemli noktaları görmek hem de şehri acele etmeden keşfetmek açısından faydalı olabilir.",
      },
    ],
  },

  "roma-gezi-rehberi-tarih-ve-lezzet-rotasi": {
    title: "Roma Gezi Rehberi: Tarih ve Lezzet Rotası",
    category: "Gezi Rehberi",
    date: "19 Eylül 2026",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Roma; tarihi yapıları, meydanları ve İtalyan mutfağıyla kısa şehir kaçamakları için öne çıkan destinasyonlardan biridir.",
    sections: [
      {
        title: "Tarihi rotaya başlayın",
        text:
          "Kolezyum, Roma Forumu ve Pantheon gibi tarihi yapılar şehrin en önemli durakları arasında yer alır.",
      },
      {
        title: "Şehirde yürüyüş",
        text:
          "Roma’nın birçok merkezi bölgesi yürüyerek keşfedilebilir. Trevi Çeşmesi, Piazza Navona ve İspanyol Merdivenleri aynı gün içerisinde farklı rotalarla ziyaret edilebilir.",
      },
      {
        title: "İtalyan mutfağı",
        text:
          "Roma’da makarna, pizza ve geleneksel İtalyan tatlılarını deneyebilirsiniz. Turistik bölgelerin dışında kalan restoranları da değerlendirmek farklı seçenekler sunabilir.",
      },
    ],
  },

  "balkanlar-seyahat-rehberi": {
    title: "Balkanlar Seyahat Rehberi",
    category: "Seyahat Rehberi",
    date: "18 Eylül 2026",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Balkanlar, kısa sürede birden fazla ülke ve şehir görmek isteyen gezginler için farklı rota seçenekleri sunuyor.",
    sections: [
      {
        title: "Popüler Balkan rotaları",
        text:
          "Belgrad, Saraybosna, Üsküp, Tiran ve Priştine gibi şehirler Balkan seyahatlerinde değerlendirilebilecek destinasyonlar arasında bulunuyor.",
      },
      {
        title: "Birden fazla şehir planı",
        text:
          "Seyahatinizin süresine göre birkaç şehri aynı gezi içerisinde birleştirebilirsiniz. Ulaşım seçeneklerini önceden karşılaştırmak planlamayı kolaylaştırır.",
      },
      {
        title: "Bütçe planlaması",
        text:
          "Uçuş, konaklama ve şehir içi ulaşım masraflarını birlikte değerlendirmek toplam seyahat bütçenizi daha doğru hesaplamanıza yardımcı olur.",
      },
    ],
  },

  "kisa-sehir-kacamaklari-icin-oneriler": {
    title: "Kısa Şehir Kaçamakları İçin Öneriler",
    category: "Seyahat İpuçları",
    date: "17 Eylül 2026",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Uzun bir tatil için zamanınız yoksa birkaç günlük şehir kaçamaklarıyla farklı destinasyonları keşfedebilirsiniz.",
    sections: [
      {
        title: "Kısa seyahat için şehir seçimi",
        text:
          "Direkt uçuş bulunan ve havalimanından şehir merkezine kolay ulaşım sağlanan destinasyonlar kısa tatiller için daha pratik olabilir.",
      },
      {
        title: "Programı fazla doldurmayın",
        text:
          "İki veya üç günlük seyahatlerde çok fazla nokta planlamak yerine şehirdeki birkaç önemli bölgeye odaklanmak daha rahat bir deneyim sağlayabilir.",
      },
      {
        title: "Uçuş saatlerini kontrol edin",
        text:
          "Gidiş ve dönüş saatleri kısa seyahatlerde özellikle önemlidir. Sabah erken gidiş veya akşam dönüş seçenekleri seyahat süresini daha verimli kullanmanıza yardımcı olabilir.",
      },
    ],
  },

  "ucak-bileti-alirken-dikkat-edilecekler": {
    title: "Uçak Bileti Alırken Dikkat Edilecekler",
    category: "Uçuş Rehberi",
    date: "16 Eylül 2026",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Uçak bileti satın alırken yalnızca görünen fiyatı değil, biletin sunduğu koşulları da kontrol etmek önemlidir.",
    sections: [
      {
        title: "Bagaj hakkını kontrol edin",
        text:
          "Bilet fiyatına kabin veya uçak altı bagajının dahil olup olmadığını mutlaka kontrol edin. Ek bagaj ücretleri toplam maliyeti değiştirebilir.",
      },
      {
        title: "Aktarma süresine bakın",
        text:
          "Aktarmalı uçuşlarda aktarma süresinin yeterli olduğundan emin olun. Çok kısa aktarmalar bağlantıyı kaçırma riskini artırabilir.",
      },
      {
        title: "Havalimanını kontrol edin",
        text:
          "Bazı şehirlerde birden fazla havalimanı bulunabilir. Havalimanının şehir merkezine uzaklığını ve ulaşım seçeneklerini bilet almadan önce kontrol etmek faydalıdır.",
      },
      {
        title: "Toplam fiyatı karşılaştırın",
        text:
          "Farklı uçuş seçeneklerini karşılaştırırken bilet fiyatının yanında bagaj, koltuk seçimi ve diğer ek ücretleri de dikkate alın.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Yazı bulunamadı</h1>
          <p className="text-slate-500 mb-6">
            Aradığınız blog yazısı mevcut değil.
          </p>

          <Link
            href="/blog"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            ← Bloga Dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              ✈ Uçuşlar
            </Link>

            <Link
              href="/hotel"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              🏨 Otel
            </Link>

            <Link
              href="/cars"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </Link>

            <Link
              href="/discover"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              🌍 Keşfet
            </Link>

            <Link
              href="/blog"
              className="text-xs font-semibold text-blue-600"
            >
              📝 Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">TR</span>

            <Link
              href="/login"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600"
            >
              Giriş
            </Link>
          </div>
        </div>
      </header>

      {/* HERO IMAGE */}
      <section className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="h-[300px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-4xl px-5 pb-10">
            <div className="mb-3 inline-flex rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white">
              {post.category}
            </div>

            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-3 text-xs text-white/80">{post.date}</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="mx-auto max-w-3xl px-5 py-12">
        <p className="mb-10 text-lg leading-8 text-slate-600">
          {post.intro}
        </p>

        <div className="space-y-10">
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {section.title}
              </h2>

              <p className="text-[15px] leading-7 text-slate-600">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Uçuşunuzu şimdi arayın
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            UçGit ile farklı uçuş seçeneklerini karşılaştırarak seyahatiniz
            için uygun uçuşu keşfedin.
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            ✈ Uçuş Ara
          </Link>
        </div>

        {/* BACK */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Tüm Blog Yazılarına Dön
          </Link>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 md:flex-row">
          <img
            src="/logo.jpg"
            alt="UçGit"
            className="h-9 w-auto object-contain"
          />

          <p className="text-[11px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-4 text-[11px] text-slate-500">
            <Link href="/privacy" className="hover:text-blue-600">
              Gizlilik
            </Link>

            <Link href="/terms" className="hover:text-blue-600">
              Kullanım Şartları
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              İletişim
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
