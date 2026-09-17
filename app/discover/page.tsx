"use client";

import { useState } from "react";

const destinations = [
  {
    name: "Paris",
    country: "Fransa",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    description:
      "Paris; Eyfel Kulesi, Louvre Müzesi, tarihi meydanları ve Seine Nehri boyunca uzanan şehir dokusuyla dünyanın en çok ziyaret edilen şehirlerinden biridir.",
    places: ["Eyfel Kulesi", "Louvre Müzesi", "Notre-Dame", "Montmartre"],
    fact: "Paris, Fransa'nın başkentidir.",
  },
  {
    name: "Londra",
    country: "Birleşik Krallık",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    description:
      "Londra; tarihi yapıları, müzeleri, parkları ve Thames Nehri çevresindeki şehir yaşamıyla Avrupa'nın en önemli kültür ve turizm merkezlerinden biridir.",
    places: [
      "Big Ben",
      "Tower Bridge",
      "Buckingham Palace",
      "British Museum",
    ],
    fact: "Londra, Birleşik Krallık'ın başkentidir.",
  },
  {
    name: "Roma",
    country: "İtalya",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85",
    description:
      "Roma, antik Roma döneminden kalan yapıları, meydanları, müzeleri ve İtalyan mutfağıyla tarih ve şehir gezisini bir araya getirir.",
    places: ["Kolezyum", "Pantheon", "Trevi Çeşmesi", "Vatikan"],
    fact: "Roma, İtalya'nın başkentidir.",
  },
  {
    name: "Amsterdam",
    country: "Hollanda",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=85",
    description:
      "Amsterdam; kanalları, bisiklet kültürü, tarihi evleri ve müzeleriyle kompakt bir şehir gezisi için öne çıkan Avrupa destinasyonlarından biridir.",
    places: [
      "Rijksmuseum",
      "Van Gogh Müzesi",
      "Anne Frank Evi",
      "Jordaan",
    ],
    fact: "Amsterdam, Hollanda'nın başkentidir.",
  },
  {
    name: "Dubai",
    country: "Birleşik Arap Emirlikleri",
    region: "Orta Doğu",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Dubai; modern mimarisi, yüksek binaları, alışveriş merkezleri, plajları ve çöl deneyimleriyle farklı seyahat türlerini bir araya getirir.",
    places: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina"],
    fact: "Dubai, Birleşik Arap Emirlikleri'ndeki yedi emirlikten biridir.",
  },
  {
    name: "İstanbul",
    country: "Türkiye",
    region: "Türkiye",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
    description:
      "İstanbul; Boğazı, tarihi yarımadası, sarayları, camileri, müzeleri ve iki kıta üzerindeki konumuyla Türkiye'nin en önemli şehirlerinden biridir.",
    places: [
      "Ayasofya",
      "Topkapı Sarayı",
      "Sultanahmet",
      "Galata Kulesi",
    ],
    fact: "İstanbul, Avrupa ve Asya kıtaları üzerinde yer alan bir şehirdir.",
  },
];

const travelIdeas = [
  {
    title: "Avrupa Rotaları",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    description:
      "Paris, Roma, Amsterdam ve Londra gibi Avrupa şehirlerini bir seyahat planında değerlendirebilirsin.",
  },
  {
    title: "Balkanlar",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Yakın coğrafyalarda farklı şehirleri ve kültürleri keşfetmek isteyenler için Balkan rotaları.",
  },
  {
    title: "Şehir Kaçamakları",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Kısa süreli seyahatlerde şehir merkezine odaklanarak müze, yemek, kültür ve şehir gezilerini bir araya getir.",
  },
];

const guides = [
  {
    title: "Uçak bileti alırken nelere dikkat edilmeli?",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    text:
      "Bilet satın almadan önce bagaj hakkı, aktarma süresi, havalimanı ve bilet değişiklik koşullarını kontrol etmek önemlidir.",
  },
  {
    title: "Avrupa seyahati için pratik öneriler",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80",
    text:
      "Seyahat öncesinde ulaşım, konaklama, şehir içi ulaşım ve gezi rotanı önceden planlamak zaman kazandırabilir.",
  },
  {
    title: "Seyahat öncesi kontrol listesi",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    text:
      "Bilet, pasaport, bagaj, konaklama ve seyahat belgelerini yola çıkmadan önce kontrol et.",
  },
];

export default function DiscoverPage() {
  const [selectedDestination, setSelectedDestination] = useState<
    (typeof destinations)[number] | null
  >(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-11 w-auto rounded-lg"
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              🏨 Otel
            </a>

            <a
              href="/cars"
              className="flex items-center gap-1 text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              <span className="text-sm">🚗</span>
              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-xs font-semibold text-blue-600"
            >
              🌍 Keşfet
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
              TR 🇹🇷
            </button>

            <a
              href="/login"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              ♟
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
            🌍
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600">
            UÇGİT KEŞFET
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
            Bir sonraki seyahatini
            <span className="text-blue-600"> keşfet.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Dünyanın popüler şehirlerini keşfet, seyahat fikirlerine göz at ve
            bir sonraki rotanı UçGit ile planla.
          </p>
        </div>
      </section>

      {/* POPÜLER DESTİNASYONLAR */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            POPÜLER DESTİNASYONLAR
          </p>

          <h2 className="mt-1 text-2xl font-black">Dünyayı keşfet</h2>

          <p className="mt-2 text-sm text-slate-500">
            Şehirlerin fotoğraflarını, önemli noktalarını ve temel bilgilerini
            keşfetmek için bir şehre tıkla.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <button
                key={destination.name}
                onClick={() => setSelectedDestination(destination)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name} - ${destination.country}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                      {destination.region}
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold text-slate-500">
                    {destination.country}
                  </p>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                    {destination.description}
                  </p>

                  <span className="mt-4 inline-block text-xs font-bold text-blue-600">
                    Şehri keşfet →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇİLEN ŞEHİR DETAYI */}
      {selectedDestination && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-5xl px-5">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[280px]">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="p-7 md:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {selectedDestination.region}
                      </p>

                      <h2 className="mt-1 text-3xl font-black">
                        {selectedDestination.name}
                      </h2>

                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {selectedDestination.country}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedDestination(null)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-500 transition hover:bg-slate-200"
                    >
                      ×
                    </button>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {selectedDestination.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-bold text-blue-700">
                      Kısa bilgi
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {selectedDestination.fact}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold text-slate-900">
                      Görülecek yerler
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedDestination.places.map((place) => (
                        <span
                          key={place}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/"
                    className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    {selectedDestination.name} için uçuş ara →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEYAHAT FİKİRLERİ */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              SEYAHAT FİKİRLERİ
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Seyahatini planlamaya başla
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
              Farklı seyahat tarzlarına uygun rotalardan ilham al.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {travelIdeas.map((idea) => (
              <a
                key={idea.title}
                href="/blog"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-black">{idea.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {idea.description}
                  </p>

                  <span className="mt-4 inline-block text-xs font-bold text-blue-600">
                    Rehberleri incele →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEYAHAT REHBERİ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                SEYAHAT REHBERİ
              </p>

              <h2 className="mt-1 text-2xl font-black">
                Seyahat hakkında daha fazlasını keşfet
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Seyahat planını kolaylaştıracak pratik bilgiler.
              </p>
            </div>

            <a
              href="/blog"
              className="text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              Tüm yazılar →
            </a>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {guides.map((guide) => (
              <a
                key={guide.title}
                href="/blog"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-black">{guide.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {guide.text}
                  </p>

                  <span className="mt-4 inline-block text-xs font-bold text-blue-600">
                    Yazıyı incele →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* UÇGİT HİZMETLERİ */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              UÇGİT
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Seyahatini tek yerden planla
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
              Seyahatin için ihtiyaç duyabileceğin hizmetleri UçGit üzerinden
              keşfet.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <a
              href="/"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80"
                  alt="Uçuş"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-black">
                  Uçuşları karşılaştır
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Farklı uçuş seçeneklerini karşılaştır ve seyahat planına
                  uygun uçuşu keşfet.
                </p>

                <span className="mt-4 inline-block text-xs font-bold text-blue-600">
                  Uçuş ara →
                </span>
              </div>
            </a>

            <a
              href="/hotels"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Otel"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-black">
                  Konaklamanı planla
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Seyahatin için uygun konaklama seçeneklerini UçGit üzerinden
                  keşfet.
                </p>

                <span className="mt-4 inline-block text-xs font-bold text-blue-600">
                  Otellere göz at →
                </span>
              </div>
            </a>

            <a
              href="/cars"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
                  alt="Araç kiralama"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-black">Araç kiralama</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Seyahatinde kullanabileceğin araç kiralama seçeneklerini
                  keşfet.
                </p>

                <span className="mt-4 inline-block text-xs font-bold text-blue-600">
                  Araçlara göz at →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="mx-auto max-w-4xl px-5 text-center text-white">
          <div className="text-3xl">✈️</div>

          <h2 className="mt-3 text-2xl font-black">
            Bir sonraki seyahatini UçGit ile planla.
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80">
            Destinasyonunu seç, uçuş seçeneklerini karşılaştır ve seyahatine
            hazırlan.
          </p>

          <a
            href="/"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-xs font-bold text-blue-600 shadow-sm transition hover:bg-slate-50"
          >
            Uçuşları keşfet →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-9 w-auto rounded-lg"
          />

          <p className="mt-2 text-[11px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-4 text-[11px] text-slate-500">
            <a href="/about" className="transition hover:text-blue-600">
              Hakkımızda
            </a>

            <a href="/blog" className="transition hover:text-blue-600">
              Blog
            </a>

            <a href="/contact" className="transition hover:text-blue-600">
              İletişim
            </a>

            <a href="/faq" className="transition hover:text-blue-600">
              SSS
            </a>

            <a
              href="/privacy-policy"
              className="transition hover:text-blue-600"
            >
              Gizlilik
            </a>

            <a href="/terms" className="transition hover:text-blue-600">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
