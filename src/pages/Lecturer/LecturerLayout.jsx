import DashboardLayout from "@/layouts/DashboardLayout";
import { Home, User } from "lucide-react";
import React from "react";
import { Outlet } from "react-router";

const LecturerLayout = () => {
  const navLinks = [
    { id: "dashboard", label: "Dashboard", link: "/lecturer/", icon: Home },
    { id: "profile", label: "Profile", link: "/profile", icon: User },
  ];
  return (
    <div>
      <DashboardLayout navLinks={navLinks}>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};

export default LecturerLayout;
