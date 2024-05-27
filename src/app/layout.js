import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "A google clone homepage",
  description: "A page to make global search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
