import "./globals.css";

export const metadata = {
  title: "UçGit",
  description: "Ucuz uçak bileti bul",

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