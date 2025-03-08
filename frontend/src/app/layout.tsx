"use client";

import { ReactNode } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/topBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/", "/register"];

  if (noLayoutRoutes.includes(pathname)) {
    return (
      <>
        <html lang="en">
          <body className={`bg-white antialiased`}>{children}</body>
        </html>
      </>
    );
  }

  return (
    <html lang="en">
      <body className={`bg-white antialiased`}>
        {/* Sidebar and Main Content */}
        <NavBar />
        <div className="flex pt-16">
          <Sidebar />
          <main className="ml-32 flex-1 p-4">{children}</main>
        </div>

        <ToastContainer />
      </body>
    </html>
  );
}
