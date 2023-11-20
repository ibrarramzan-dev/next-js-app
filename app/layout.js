import "./globals.css";

export const metadata = {
  title: "Content Type App",
  description: "test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
