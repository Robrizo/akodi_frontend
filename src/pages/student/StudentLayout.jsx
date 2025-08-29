import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Outlet } from "react-router";
import { BookOpen, Home, Scale, User } from "lucide-react";

const StudentLayout = () => {
  const navLinks = [
    { id: "dashboard", link: "/student/", label: "Dashboard", icon: Home },
    { id: "profile", link: "/student/profile", label: "Profile", icon: User },
    {
      id: "courses",
      link: "/student/courses",
      label: "Courses",
      icon: BookOpen,
    },
    { id: "grades", link: "/student/grades", label: "My Grades", icon: Scale },
  ];
  return (
    <div>
      <DashboardLayout navLinks={navLinks}>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};

export default StudentLayout;
