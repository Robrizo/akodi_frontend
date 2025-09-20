import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Outlet } from "react-router";
import { BookOpen, Home, LockKeyhole, Pencil, Scale, User } from "lucide-react";

const StudentLayout = () => {
  const navLinks = [
    {
      id: "dashboard",
      link: "/student/",
      label: "Dashboard",
      icon: Home,
    },
    {
      id: "profile",
      link: "/student/profile",
      label: "Profile",
      icon: User,
    },
    {
      id: "register",
      link: "/student/register",
      label: "Registration",
      icon: Pencil,
    },
    {
      id: "courses",
      link: "/student/courses",
      label: "Courses",
      icon: BookOpen,
    },
    {
      id: "grades",
      link: "/student/grades",
      label: "My Grades",
      icon: Scale,
    },
    {
      id: "security",
      link: "/student/security",
      label: "Security",
      icon: LockKeyhole,
    },
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
