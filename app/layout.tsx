import "./globals.css";

export const metadata = {
  title: "UçGit",
  description: "Ucuz uçak bileti bul",
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