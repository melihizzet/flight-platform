import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UçGit - En Uygun Uçak Bileti",
  description:
    "UçGit ile yüzlerce havayolu ve seyahat sitesini karşılaştır, en uygun uçak bileti fiyatını bul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.setAttribute("data-cmp-ab", "2");
                script.src = "https://tpembars.com/NTMzODA3.js?t=533807";
                document.head.appendChild(script);
              })();
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.type = "module";
                script.src = "https://tpwdg.com/wl_web/main.js?wl_id=18030";
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
