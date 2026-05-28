"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020817",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* TP SCRIPT */}
      <Script
        src="https://tpwdg.com/content?currency=try&trs=18030&shmarker=567496&locale=tr&powered_by=true"
        strategy="afterInteractive"
      />

      {/* HEADER */}
      <header
        style={{
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          ✈️ UçGit
        </h1>

        <nav style={{ display: "flex", gap: "24px" }}>
          <a href="#">Kampanyalar</a>
          <a href="#">Blog</a>
          <a href="#">İletişim</a>
          <a href="#">Hakkımızda</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#3b82f6",
            marginBottom: "16px",
          }}
        >
          En uygun uçuşları saniyeler içinde bul
        </p>

        <h2
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            marginBottom: "24px",
            lineHeight: 1.1,
          }}
        >
          Ucuza uçmanın{" "}
          <span style={{ color: "#3b82f6" }}>
            en kolay yolu
          </span>
        </h2>

        <p
          style={{
            fontSize: "22px",
            opacity: 0.8,
            marginBottom: "50px",
          }}
        >
          Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
          ve en uygun bileti hemen bul.
        </p>

        {/* TP WIDGET */}
        <div
          className="tp-widget-wrapper"
          style={{
            background: "#111827",
            borderRadius: "24px",
            padding: "24px",
            overflow: "hidden",
          }}
        >
          <div
            className="tp-widget-search-form"
            data-pw-widget="search"
          ></div>
        </div>
      </section>

      {/* AIRLINES */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            Popüler Havayolları
          </h3>

          <a href="#">Tümünü Gör</a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "THY",
            "Pegasus",
            "Lufthansa",
            "Qatar",
            "Emirates",
            "British Airways",
          ].map((airline) => (
            <div
              key={airline}
              style={{
                background: "#111827",
                borderRadius: "20px",
                padding: "40px 20px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              {airline}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}