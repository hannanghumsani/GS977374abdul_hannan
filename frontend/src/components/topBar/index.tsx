"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/Gsynergy Logo V2 Long Description.svg";
import { useRouter } from "next/navigation";

function index() {
  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };
  return (
    <nav className="bg-white text-black py-1 px-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center space-x-3">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Data Viewer App</h1>
      </div>
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
      >
        Logout
      </button>
    </nav>
  );
}

export default index;
