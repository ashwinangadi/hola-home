"use client";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <section className="flex">
            <Sidebar />
            <div className="w-full space-y-10">
              <Header name="Dasboard" />
              {children}
            </div>
          </section>
        </AuthContextProvider>
      </body>
    </html>
  );
}
