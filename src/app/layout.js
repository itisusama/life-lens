import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Life Lense",
  description: "Website for showing vlogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
