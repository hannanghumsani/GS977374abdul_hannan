"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaStore, FaBox, FaClipboardList, FaChartBar } from "react-icons/fa";

const navItems = [
  { name: "Store", icon: <FaStore />, path: "/store" },
  { name: "SKU", icon: <FaBox />, path: "/sku" },
  { name: "Planning", icon: <FaClipboardList />, path: "/planning" },
  { name: "Chart", icon: <FaChartBar />, path: "/chart" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-40 bg-gray-900 text-white h-screen fixed flex flex-col">
      <nav className="flex flex-col space-y-2 mt-4">
        {navItems.map(({ name, icon, path }) => (
          <Link
            key={path}
            href={path}
            className={`flex items-center px-4 py-2 text-lg hover:bg-gray-700 transition duration-300 ${
              pathname === path ? "bg-gray-700" : ""
            }`}
          >
            <span className="mr-3 text-xl">{icon}</span>
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
