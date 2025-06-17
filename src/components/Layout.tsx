"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const tabs = [
    { name: "home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-128">
      {/* Header with Navigation Tabs */}
      <header className="bg-white shadow-sm border-b fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">My App</h1>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 border-b-2 border-blue-700"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {tab.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          When navigating between about or dashboard pages after scrolling less
          than the layout padding area, the scroll position remains instead of
          resetting to the top.
        </h1>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div className="px-4 py-6 sm:px-0">{children}</div>
      </main>
    </div>
  );
}
