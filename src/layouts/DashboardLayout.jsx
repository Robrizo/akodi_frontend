import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { X, Menu, LogOut, Sun, Moon } from "lucide-react";
import Breadcrumbs from "../components/common/BreadCrumbs";

const DashboardLayout = ({ navLinks = [] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  const location = useLocation();
  const activeTab =
    navLinks.find((link) => link.link === location.pathname)?.id || "dashboard";

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-surface-a0 flex dark:bg-surface-dark-a0">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen
            ? "translate-x-0 w-64 fixed"
            : "-translate-x-full w-0 lg:translate-x-0 lg:w-64"
        } max-h-screen absolute lg:sticky inset-y-0 left-0 top-0 z-[50] bg-surface-a10 shadow-lg transition-all duration-200 ease-in-out overflow-hidden dark:bg-surface-dark-a10`}
      >
        <div className="flex items-center justify-between p-4 border- border-gray-30">
          <div className="text-2xl font-bold">
            <h1 className="dark:text-light-a0">
              Akodi <span className="text-primary-a0">University</span>
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav>
          <div className="px-4 space-y-2 mt-4">
            {navLinks.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                onClick={() => {
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 text-dark-a0 text-sm font-medium rounded-lg transition-colors cursor-pointer  ${
                  activeTab === item.id
                    ? "bg-primary-a0/10 text-primary-a10 border-r-4 border-primary-a0"
                    : "text-dark-a0 hover:bg-primary-a0/10 hover:text-primary-a0 dark:text-light-a0"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Admin Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-surface-a30 dark:border-surface-dark-a30">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-light-a0">
                Robert Chunga
              </p>
              <p className="text-xs text-gray-700 dark:text-light-a0/50">
                robertchungah@gmail.com
              </p>
            </div>
          </div>
          <button className="mt-3 w-full flex items-center justify-center px-4 py-2 text-sm text-dark-a0 bg-dark-a0/10 hover:text-primary-a0 hover:bg-primary-a0/10 rounded-lg transition-colors cursor-pointer dark:bg-dark-a0/50 dark:text-light-a0">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm border-b border-surface-a30 dark:bg-surface-dark-a10 dark:border-surface-dark-a30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-500 hover:text-gray-700 mr-4 cursor-pointer"
                >
                  <Menu className="w-6 h-6 dark:text-light-a0" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-gray-600">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="cursor-pointer "
                >
                  {isDark ? (
                    <Sun className="mr-2 w-5 h-5 dark:text-light-a0" />
                  ) : (
                    <Moon className="mr-2 w-5 h-5" />
                  )}
                </button>
                <div className="w-8 h-8 bg-primary-a0 rounded-full flex items-center justify-center text-surface-a0 font-medium">
                  RC
                </div>
                <div className="hidden md:block dark:text-light-a0">
                  Robert chunga
                </div>
                <div className="text-xs text-light-a0 bg-primary-a30 px-2 py-0.5 rounded-full">
                  admin
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* <Breadcrumbs role={"admin"} /> */}
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-dark-a0/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
