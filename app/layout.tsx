import "./globals.css";

export const metadata = {
  title: "UçGit",
  description: "Ucuz uçuşları karşılaştır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = "https://tpembars.com/NTMzODA3.js?t=533807";
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