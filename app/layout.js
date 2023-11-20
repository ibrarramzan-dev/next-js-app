import "./globals.css";
import TopBar from "@/components/TopBar";

export const metadata = {
  title: "Content Type App",
  description: "test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar
          pageName="Media management"
          pageTitle="Draft campaign"
          userFname="Jane Cooper"
          profileImg="https://i.imgur.com"
        />
        {children}
      </body>
    </html>
  );
}
