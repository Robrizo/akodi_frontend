import React from "react";
import Card from "../../components/common/Card";
import { BookOpen, BookUser, GraduationCap, School } from "lucide-react";
import SectionHeader from "../../components/common/SectionHeader";
import GenderChart from "../../components/GenderChart";
import CourseChart from "../../components/CourseChart";

const AdminDashboard = () => {
  const cardItems = [
    {
      title: "Total Students",
      icon: BookUser,
      total: 230,
    },
    {
      title: "Total Teachers",
      icon: GraduationCap,
      total: 8,
    },
    {
      title: "Total Courses",
      icon: BookOpen,
      total: 16,
    },
    {
      title: "Total Classes",
      icon: School,
      total: 5,
    },
  ];
  return (
    <div>
      <div className="mb-4">
        <SectionHeader title="Dashboard" />
      </div>

      <div className="space-y-6">
        {/* cards */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {cardItems.map((item) => (
            <Card
              key={item}
              title={item.title}
              icon={item.icon}
              total={item.total}
            />
          ))}
        </div>
        {/* charts */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <GenderChart />
          </div>
          <div>
            <CourseChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
