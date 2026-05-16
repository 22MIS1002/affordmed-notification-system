import "./globals.css";

export const metadata = {
  title: "Notification System",
  description: "Affordmed Notification System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}