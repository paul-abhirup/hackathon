'use client'

import { Roboto } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400' , '500', '700', '900'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <main className="max-w-4xl max-auto p-4">
      <AuthContextProvider>
      <Header />
      {children}
      </AuthContextProvider>
          <footer className="border-t p-8 text-center text-gray-500 mt-16">
            &copy; 2021 Waste Management
          </footer>
      </main>
      </body>
    </html>
  );
}
