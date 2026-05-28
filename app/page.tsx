"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://tpwdg.com/content?currency=try&trs=18030&shmarker=567496&locale=tr&powered_by=true";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #020817 0%, #071226 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 48px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          ✈️ UçGit
        </h1>

        <nav
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            fontSize: "17px",
          }}
        >
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Kampanyalar
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Blog
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            İletişim
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Hakkımızda
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "100px 20px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#3b82f6",
            marginBottom: "18px",
            fontSize: "18px",
          }}
        >
          En uygun uçuşları saniyeler içinde bul
        </p>

        <h2
          style={{
            fontSize: "76px",
            fontWeight: "bold",
            lineHeight: 1.1,
            marginBottom: "26px",
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
            maxWidth: "900px",
            margin: "0 auto 50px",
            lineHeight: 1.6,
          }}
        >
          Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
          ve en uygun bileti hemen bul.
        </p>

        {/* TRAVELPAYOUTS */}
        <div
          style={{
            background: "rgba(17,24,39,0.92)",
            borderRadius: "28px",
            padding: "30px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div
            data-tpw-widget="search"
            data-tpw-currency="TRY"
            data-tpw-language="tr"
            data-tpw-origin="IST"
            style={{
              minHeight: "120px",
            }}
          ></div>
        </div>
      </section>

      {/* AIRLINES */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 20px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <h3
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Popüler Havayolları
          </h3>

          <a
            href="#"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Tümünü Gör
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "22px",
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
                borderRadius: "22px",
                padding: "42px 20px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "24px",
                border: "1px solid rgba(255,255,255,0.05)",
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