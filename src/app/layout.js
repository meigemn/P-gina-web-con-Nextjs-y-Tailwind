import localFont from "next/font/local";
import "./globals.css";
import MenuPrincipal from "@/components/menu-principal";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}>
        
          <MenuPrincipal/>
        
        <main className=" max-2 pb-6 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
