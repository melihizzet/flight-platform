"use client";

import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <Script
        id="travelpayouts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var script = document.createElement("script");
              script.async = true;
              script.src = "https://tpwdg.com/wl_web/main.js?wl_id=18030";
              document.body.appendChild(script);
            })();
          `,
        }}
      />

      <main
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(2,6,23,0.92)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                fontWeight: 900,
              }}
            >
              ✈️ UçGit.com
            </div>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                fontWeight: 600,
              }}
            >
              <a href="#">Kampanyalar</a>
              <a href="#">Blog</a>
              <a href="#">İletişim</a>
              <a href="#">Hakkımızda</a>

              <button
                style={{
                  background: "#2563eb",
                  border: "none",
                  color: "white",
                  padding: "12px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Kayıt Ol
              </button>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "90px 24px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#3b82f6",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: "24px",
            }}
          >
            Ucuza uçmanın{" "}
            <span style={{ color: "#3b82f6" }}>
              en kolay yolu
            </span>
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              maxWidth: "900px",
              margin: "0 auto 50px",
              lineHeight: 1.6,
            }}
          >
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör ve en uygun bileti hemen bul.
          </p>

          {/* TP SEARCH */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#172554,#1e293b)",
              borderRadius: "28px",
              padding: "28px",
              overflow: "hidden",
            }}
          >
            <div id="tpwl-search"></div>
          </div>
        </section>

        {/* AIRLINES */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "30px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 800,
              }}
            >
              Popüler Havayolları
            </h2>

            <a
              href="#"
              style={{
                color: "#3b82f6",
                fontWeight: 600,
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
              gap: "24px",
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
                  background: "#0f172a",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  padding: "38px 20px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                {airline}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "90px",
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "60px 24px",
              display: "grid",
              gridTemplateColumns:
                "2fr 1fr 1fr 1fr",
              gap: "40px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  marginBottom: "18px",
                }}
              >
                ✈️ UçGit.com
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                }}
              >
                UçGit ile tüm havayollarını
                karşılaştırın ve en uygun uçuşu
                saniyeler içinde bulun.
              </p>
            </div>

            <div>
              <h3
                style={{
                  marginBottom: "18px",
                }}
              >
                Menü
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#94a3b8",
                }}
              >
                <a href="#">Kampanyalar</a>
                <a href="#">Blog</a>
                <a href="#">İletişim</a>
                <a href="#">Hakkımızda</a>
              </div>
            </div>

            <div>
              <h3
                style={{
                  marginBottom: "18px",
                }}
              >
                Destek
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#94a3b8",
                }}
              >
                <a href="#">
                  Sık Sorulan Sorular
                </a>
                <a href="#">
                  Gizlilik Politikası
                </a>
                <a href="#">
                  Kullanım Şartları
                </a>
              </div>
            </div>

            <div>
              <h3
                style={{
                  marginBottom: "18px",
                }}
              >
                İletişim
              </h3>

              <div
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                }}
              >
                support@ucgit.com
                <br />
                info@ucgit.com
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop:
                "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
              padding: "24px",
              color: "#64748b",
            }}
          >
            © 2026 UçGit. Tüm hakları saklıdır.
          </div>
        </footer>
      </main>
    </>
  );
}