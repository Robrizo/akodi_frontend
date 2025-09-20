import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { BookOpen, BookUser, GraduationCap, Home, School, Settings, Users } from "lucide-react";
import { Outlet } from "react-router";

const Dashboard = () => {
  const navLinks = [
    {
      id: "dashboard",
      link: "/admin/",
      label: "Dashboard",
      icon: Home,
    },
    {
      id: "students",
      link: "/admin/students",
      label: "Students",
      icon: BookUser,
    },
    {
      id: "lecturers",
      link: "/admin/lecturers",
      label: "Lecturers",
      icon: GraduationCap,
    },
    {
      id: "courses",
      link: "/admin/courses",
      label: "Courses",
      icon: BookOpen,
    },
    {
      id: "users",
      link: "/admin/users",
      label: "Users",
      icon: Users,
    },
    {
      id: "settings",
      link: "/admin/settings",
      label: "Settings",
      icon: Settings,
    },
  ];
  return <DashboardLayout navLinks={navLinks}><Outlet/></DashboardLayout>;
};

export default Dashboard;
