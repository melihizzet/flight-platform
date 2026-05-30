import "./globals.css";

export const metadata = {
  title: "En Uygun Uçak Bileti - UçGit",

  description:
    "En uygun uçak biletlerini saniyeler içinde karşılaştır. UçGit ile ucuz uçuşları keşfet.",

  keywords: [
    "uçak bileti",
    "ucuz uçak bileti",
    "en uygun uçak bileti",
    "uçuş ara",
    "uçuş karşılaştır",
    "ucuz uçuş",
    "bilet karşılaştırma",
    "UçGit",
  ],

  metadataBase: new URL("https://www.ucgit.com"),

  openGraph: {
    title: "En Uygun Uçak Bileti - UçGit",

    description:
      "En uygun uçak biletlerini saniyeler içinde karşılaştır.",

    url: "https://www.ucgit.com",

    siteName: "UçGit",

    locale: "tr_TR",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta
          name="google-site-verification"
          content="IXpXj097D9wBObuiiVN30qR4NoamhlRhOtOR1b3fV50"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}