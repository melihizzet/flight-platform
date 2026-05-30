import "./globals.css";

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

  verification: {
    google: "IXpXj097D9wBObuiiVN30qR4NoamhlRhOtOR1b3fV50",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}