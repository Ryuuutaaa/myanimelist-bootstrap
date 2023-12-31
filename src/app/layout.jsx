import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyAnimeList | Kelompok 1",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "black", color: "white" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
