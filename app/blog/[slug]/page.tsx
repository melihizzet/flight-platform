import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

const posts = {
  "2026da-en-uygun-avrupa-rotalari": {
    title: "2026'da En Uygun Avrupa Rotaları",
    category: "Avrupa",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Avrupa seyahati planlayanlar için popüler şehirleri, seyahat planlamasını ve bilet ararken dikkat edilmesi gereken noktaları keşfedin.",
    sections: [
      {
        title: "Avrupa seyahatinize nereden başlarsınız?",
        text:
          "Avrupa seyahatinde ilk adım gitmek istediğiniz şehirleri belirlemek ve seyahat süresine uygun bir rota oluşturmaktır. Tek bir şehirde kalabileceğiniz gibi birbirine yakın şehirleri aynı seyahatte değerlendirebilirsiniz.",
      },
      {
        title: "Popüler Avrupa şehirleri",
        text:
          "Paris, Roma, Londra ve Amsterdam farklı şehir deneyimleri sunan popüler rotalar arasında yer alır. Tarih, sanat, mimari, müze ve şehir yaşamı gibi ilgi alanlarına göre rota seçilebilir.",
      },
      {
        title: "Uçak bileti ararken",
        text:
          "Uçuş ararken yalnızca bilet fiyatına değil, bagaj, aktarma süresi, havalimanı ve toplam seyahat maliyetine de dikkat etmek faydalıdır.",
      },
    ],
  },

  "paris-gezi-rehberi": {
    title: "Paris Gezi Rehberi: İlk Kez Gideceklere Öneriler",
    category: "Şehir Rehberi",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Paris'te görülecek önemli noktalar, şehir içi ulaşım ve kısa süreli bir gezi planı için kullanabileceğiniz öneriler.",
    sections: [
      {
        title: "Paris'te görülmesi gereken yerler",
        text:
          "Eyfel Kulesi, Louvre Müzesi, Notre-Dame çevresi, Champs-Élysées ve Montmartre Paris gezilerinin en bilinen durakları arasındadır.",
      },
      {
        title: "Şehir içi ulaşım",
        text:
          "Paris'te metro ve tren ağı şehrin farklı bölgelerine ulaşmayı kolaylaştırır. Kısa seyahatlerde toplu taşıma seçeneklerini önceden planlamak zaman kazandırabilir.",
      },
      {
        title: "Paris seyahati için ipucu",
        text:
          "Seyahat tarihinizi belirledikten sonra uçuş ve konaklama seçeneklerini mümkün olduğunca erken karşılaştırmak faydalı olabilir.",
      },
    ],
  },

  "roma-gezi-rehberi": {
    title: "Roma Gezi Rehberi: Tarih ve Lezzet Rotası",
    category: "Şehir Rehberi",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Roma, antik dönemden günümüze ulaşan yapıları, meydanları, müzeleri ve İtalyan mutfağıyla şehir gezisi için zengin seçenekler sunar.",
    sections: [
      {
        title: "Roma'da görülmesi gereken yerler",
        text:
          "Kolezyum, Trevi Çeşmesi, Pantheon, Vatikan ve İspanyol Merdivenleri Roma gezilerinde öne çıkan duraklardır.",
      },
      {
        title: "Roma'yı keşfetmek",
        text:
          "Roma'nın tarihi merkezinde birçok nokta birbirine yürüyüş mesafesinde bulunur. Günlük planı bölgelere ayırmak şehir gezisini daha kolay hale getirebilir.",
      },
      {
        title: "Roma'da yemek kültürü",
        text:
          "İtalyan mutfağının farklı örneklerini şehir genelinde deneyebilirsiniz. Yerel restoranları araştırmak seyahate farklı bir deneyim katabilir.",
      },
    ],
  },

  "balkanlar-seyahat-rehberi": {
    title: "Balkanlar Seyahat Rehberi",
    category: "Balkanlar",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Balkan şehirlerini keşfetmek isteyenler için rota önerileri ve seyahat planlama ipuçları.",
    sections: [
      {
        title: "Balkan rotaları",
        text:
          "Saraybosna, Belgrad, Üsküp, Priştine ve Sofya gibi şehirler farklı kültürleri ve tarihi bölgeleri keşfetmek isteyen seyahatseverler için çeşitli seçenekler sunar.",
      },
      {
        title: "Birden fazla şehir",
        text:
          "Balkan seyahatlerinde birden fazla ülkeyi aynı gezi içerisinde görmek mümkündür. Rota oluştururken şehirler arasındaki ulaşım sürelerini kontrol etmek önemlidir.",
      },
      {
        title: "Bütçe planlaması",
        text:
          "Uçuş, konaklama, şehir içi ulaşım ve yeme-içme giderlerini birlikte değerlendirerek seyahat bütçenizi daha kolay oluşturabilirsiniz.",
      },
    ],
  },

  "sehir-kacamaklari": {
    title: "Kısa Şehir Kaçamakları İçin Öneriler",
    category: "Şehir Kaçamakları",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Hafta sonu veya birkaç günlük kısa tatiller için şehir seçimi ve planlama önerileri.",
    sections: [
      {
        title: "Kısa seyahat nasıl planlanır?",
        text:
          "Kısa şehir gezilerinde havalimanından merkeze ulaşım süresi ve şehirde görmek istediğiniz yerlerin birbirine uzaklığı önemlidir.",
      },
      {
        title: "Doğru uçuşu seçin",
        text:
          "Gidiş ve dönüş saatlerini birlikte değerlendirerek şehirde geçireceğiniz zamanı artırabilirsiniz.",
      },
      {
        title: "Önceden plan yapmak",
        text:
          "Konaklama, ulaşım ve önemli ziyaret noktalarını önceden belirlemek kısa tatillerde zaman kazanmanıza yardımcı olur.",
      },
    ],
  },

  "ucak-bileti-alirken-dikkat-edilecekler": {
    title: "Uçak Bileti Alırken Dikkat Edilecekler",
    category: "Seyahat İpuçları",
    read: "4 dk",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Uçak bileti ararken fiyatları karşılaştırmak ve seyahat planınızı daha doğru yapmak için önemli noktalar.",
    sections: [
      {
        title: "Tarihleri karşılaştırın",
        text:
          "Seyahat tarihleriniz esnekse farklı günleri karşılaştırmak daha fazla uçuş seçeneği görmenizi sağlayabilir.",
      },
      {
        title: "Bagaj kurallarını kontrol edin",
        text:
          "Bilet fiyatlarını karşılaştırırken kabin ve kayıtlı bagaj kurallarını da kontrol etmek toplam maliyeti anlamanıza yardımcı olur.",
      },
      {
        title: "Aktarmaları değerlendirin",
        text:
          "Direkt uçuş ile aktarmalı uçuş arasında yalnızca fiyatı değil, toplam seyahat süresini de karşılaştırmak önemlidir.",
      },
    ],
  },
};

type Post = (typeof posts)[keyof typeof posts];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts[slug as keyof typeof posts] as Post | undefined;

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <Link href="/" className="text-xs font-medium text-slate-600">
              ✈️ Uçuşlar
            </Link>

            <Link href="/hotels" className="text-xs font-medium text-slate-600">
              🏨 Otel
            </Link>

            <Link href="/cars" className="text-xs font-medium text-slate-600">
              🚗 Araç Kiralama
            </Link>

            <Link
              href="/discover"
              className="text-xs font-medium text-slate-600"
            >
              🌍 Keşfet
            </Link>

            <Link href="/blog" className="text-xs font-semibold text-blue-600">
              Blog
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium"
          >
            Giriş
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="text-xs font-semibold text-blue-600"
          >
            ← Blog'a dön
          </Link>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover md:h-72"
            />
          </div>
        </div>
      </section>

      <article className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
            {post.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-2 text-[11px] text-slate-400">
            UçGit Blog • {post.read} okuma
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            {post.intro}
          </p>

          <div className="mt-8 space-y-7">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold">
                  {section.title}
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {section.text}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
            <h2 className="text-lg font-bold">
              Uçuşunuzu şimdi arayın
            </h2>

            <p className="mt-2 text-xs text-blue-50">
              Seyahatiniz için farklı uçuş seçeneklerini karşılaştırın.
            </p>

            <Link
              href="/"
              className="mt-4 inline-flex rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-600"
            >
              Uçuş Ara →
            </Link>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-7">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <img
            src="/logo.jpg"
            alt="UçGit"
            className="h-8 w-auto object-contain"
          />

          <span className="text-[11px] text-slate-400">
            © 2026 UçGit
          </span>
        </div>
      </footer>
    </main>
  );
}
