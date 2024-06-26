
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./component/navBar";
import Footer from "./component/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qatar Horse Show",
  description: "Generated by Eng Shadab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
