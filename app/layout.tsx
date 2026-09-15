import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "UçGit - En Uygun Uçak Bileti ve Ucuz Uçuşlar",
  description:
    "UçGit ile en uygun uçak biletlerini karşılaştır, ucuz uçuşları keşfet ve seyahatini kolayca planla.",
  keywords: [
    "uçak bileti",
    "ucuz uçak bileti",
    "en uygun uçak bileti",
    "uçuş ara",
    "ucuz uçuş",
    "UçGit",
  ],
  icons: {
    icon: "/airlines/ug.png",
  },
  verification: {
    google: "IXpXj097D9wBObuiiVN30qR4NoamhlRhOtOR1b3fV50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Travelpayouts Drive */}
        <Script
          id="travelpayouts-drive"
          strategy="beforeInteractive"
          src="https://tpembars.com/NTMzODA3.js?t=533807"
          async
          data-cmp-ab="2"
        />

        {/* Travelpayouts White Label */}
        <Script
          id="travelpayouts-white-label"
          strategy="beforeInteractive"
          type="module"
          src="https://tpwdg.com/wl_web/main.js?wl_id=18030"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
