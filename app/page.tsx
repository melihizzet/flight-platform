"use client";

import { useState } from "react";
import Script from "next/script";

export default function HomePage() {
  const [tripType, setTripType] = useState("Gidiş-Dönüş");
  const [from, setFrom] = useState("İstanbul (IST)");
  const [to, setTo] = useState("Paris (CDG)");
  const [departure, setDeparture] = useState("2026-06-26");
  const [returnDate, setReturnDate] = useState("2026-06-29");
  const [passengers, setPassengers] = useState("1 Yolcu, Ekonomi");

  const swapCities = () => {
    const oldFrom = from;
    setFrom(to);
    setTo(oldFrom);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TRAVELPAYOUTS */}
      <Script
        id="travelpayouts-widget"
        strategy="afterInteractive"
        src="https://tpwdg.com/wl/web/main.js?wl_id=18030"
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* MENU */}
          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="/"
              className="border-b-2 border-blue-600 py-7 font-semibold text-blue-600"
            >
              ✈ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              ▣ Otel
            </a>

            <a
              href="/cars"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </a>

            <a
              href="/discover"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              ⚙ Keşfet
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="/contact"
              className="hidden font-medium text-slate-700 md:block"
            >
              ♧ Destek
            </a>

            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium shadow-sm">
              🇹🇷 TR⌄
            </button>

            <a
              href="/login"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-blue-50"
            >
              ♙
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-white">
        {/* Uçak görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20">
          {/* BAŞLIK */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              UçGit ile seyahat et
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Uçuşunu karşılaştır,
              <br />
              <span className="text-blue-600">en uygun fiyatı uçur!</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Yüzlerce havayolu ve seyahat sitesini anında karşılaştır,
              en uygun uçak bileti fiyatını bul.
            </p>

            <div className="mt-7 flex flex-wrap gap-7 text-sm font-medium text-slate-700">
              <span>◉ Ücretsiz karşılaştırma</span>
              <span>▣ Güvenli ödeme</span>
              <span>◷ 7/24 destek</span>
            </div>
          </div>

          {/* ARAMA KUTUSU */}
          <div className="mt-12 rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-slate-200 md:p-7">
            {/* SEÇENEKLER */}
            <div className="mb-7 flex flex-wrap gap-3">
              {["Gidiş-Dönüş", "Tek Yön", "Çoklu Şehir"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
                    tripType === type
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {type === "Gidiş-Dönüş" && "↔ "}
                  {type === "Tek Yön" && "✈ "}
                  {type === "Çoklu Şehir" && "✣ "}
                  {type}
                </button>
              ))}
            </div>

            {/* FORM */}
            <div className="grid gap-4 lg:grid-cols-[1.15fr_50px_1.15fr_1fr_1fr_1fr]">
              {/* NEREDEN */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Nereden
                </label>

                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full bg-transparent font-semibold outline-none"
                />
              </div>

              {/* DEĞİŞTİR */}
              <button
                onClick={swapCities}
                className="flex h-12 w-12 items-center justify-center self-end rounded-full border border-slate-200 bg-white text-lg shadow-sm transition hover:bg-blue-50 hover:text-blue-600"
                title="Şehirleri değiştir"
              >
                ⇄
              </button>

              {/* NEREYE */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Nereye
                </label>

                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full bg-transparent font-semibold outline-none"
                />
              </div>

              {/* GİDİŞ */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Gidiş tarihi
                </label>

                <input
                  type="date"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="w-full bg-transparent font-semibold outline-none"
                />
              </div>

              {/* DÖNÜŞ */}
              <div
                className={`rounded-2xl border border-slate-200 bg-white px-5 py-4 transition ${
                  tripType === "Tek Yön"
                    ? "opacity-40"
                    : "focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
                }`}
              >
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Dönüş tarihi
                </label>

                <input
                  type="date"
                  value={returnDate}
                  disabled={tripType === "Tek Yön"}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-transparent font-semibold outline-none"
                />
              </div>

              {/* YOLCU */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Yolcu & Sınıf
                </label>

                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full bg-transparent font-semibold outline-none"
                >
                  <option>1 Yolcu, Ekonomi</option>
                  <option>2 Yolcu, Ekonomi</option>
                  <option>3 Yolcu, Ekonomi</option>
                  <option>4 Yolcu, Ekonomi</option>
                  <option>1 Yolcu, Business</option>
                  <option>2 Yolcu, Business</option>
                </select>
              </div>
            </div>

            {/* ALT SATIR */}
            <div className="mt-6 flex flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex flex-wrap gap-6 text-sm">
                <button className="font-medium text-blue-600 hover:underline">
                  ✣ Çok şehirli rota oluştur
                </button>

                <label className="flex cursor-pointer items-center gap-2 text-slate-600">
                  <input type="checkbox" defaultChecked />
                  Otelleri göster
                </label>
              </div>

              <button
                onClick={() => alert("Uçuş arama başlatılıyor...")}
                className="w-full rounded-xl bg-blue-600 px-12 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl md:w-auto"
              >
                🔎 &nbsp; Uçuş Ara
              </button>
            </div>

            <div className="mt-6 text-center text-xs text-slate-400">
              Powered by Travelpayouts
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
          <Feature
            icon="◇"
            title="En Uygun Fiyatlar"
            text="Yüzlerce siteyi karşılaştır, en iyi fiyatı bul."
          />

          <Feature
            icon="♢"
            title="Güvenli Alışveriş"
            text="SSL sertifikalı altyapımız ile güvenli ödeme."
          />

          <Feature
            icon="◷"
            title="Hızlı ve Kolay"
            text="Saniyeler içinde yüzlerce seçeneği karşılaştır."
          />

          <Feature
            icon="♧"
            title="7/24 Destek"
            text="Her zaman yanınızdayız, desteğimiz 7/24 sizinle."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4">
          {/* LOGO */}
          <div>
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-20 w-auto object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Seyahatinizin en kolay yolu.
            </p>
          </div>

          {/* ŞİRKET */}
          <div>
            <h3 className="mb-5 font-bold text-slate-900">Şirket</h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="/about" className="block hover:text-blue-600">
                Hakkımızda
              </a>
              <a href="/career" className="block hover:text-blue-600">
                Kariyer
              </a>
              <a href="/contact" className="block hover:text-blue-600">
                İletişim
              </a>
            </div>
          </div>

          {/* DESTEK */}
          <div>
            <h3 className="mb-5 font-bold text-slate-900">Destek</h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="/faq" className="block hover:text-blue-600">
                SSS
              </a>
              <a href="/contact" className="block hover:text-blue-600">
                Bize Ulaşın
              </a>
              <a href="/privacy-policy" className="block hover:text-blue-600">
                Gizlilik Politikası
              </a>
            </div>
          </div>

          {/* KEŞFET */}
          <div>
            <h3 className="mb-5 font-bold text-slate-900">Keşfet</h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="/flights" className="block hover:text-blue-600">
                Popüler Rotalar
              </a>
              <a href="/blog" className="block hover:text-blue-600">
                Blog
              </a>
              <a href="/travel-guide" className="block hover:text-blue-600">
                Seyahat Rehberi
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">
            <span>© 2026 UçGit. Tüm hakları saklıdır.</span>

            <div className="flex gap-5">
              <span>Instagram</span>
              <span>X</span>
              <span>LinkedIn</span>
            </div>

            <span>Built by Melih İzzet Zorluoğlu</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  );
}