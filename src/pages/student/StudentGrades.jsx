import React from "react";
import GeneralTable from "@/components/common/GeneralTable";
import SectionHeader from "@/components/common/SectionHeader";
import { Eye } from "lucide-react";

const StudentGrades = () => {
  const grades = [
    {
      id: 1,
      course: "CS101",
      name: "Introduction to Computer Science",
      grade: "80",
      status: "Pass",
    },
    {
      id: 2,
      course: "MATH201",
      name: "Calculus I",
      grade: "50",
      status: "pass",
    },
    {
      id: 3,
      course: "PHY101",
      name: "General Physics",
      grade: "67",
      status: "Pass",
    },
    {
      id: 4,
      course: "ENG101",
      name: "English Composition",
      grade: "56",
      status: "Pass",
    },
    {
      id: 5,
      course: "HIST101",
      name: "World History",
      grade: "73",
      status: "Pass",
    },
  ];
  return (
    <div>
      <SectionHeader title="Grades" desc={"View your academic performance"} />

      <GeneralTable
        headers={["Course Code", "Course Name", "Grade", "Status", "Action"]}
        showSearch={false}
        rows={grades}
        renderRows={(grade) => (
          <tr
            key={grade.id}
            className="hover:bg-surface-a10 dark:hover:bg-surface-dark-a10 dark:text-light-a0/80"
          >
            <td className="px-6 py-3 font-medium">{grade.course} </td>
            <td className="px-6 py-3">{grade.name}</td>
            <td className="px-6 py-3">{grade.grade}</td>
            <td className="px-6 py-3">
              <div className="w-fit px-4 rounded-full font-medium text-xs py-0.5 text-green-600 bg-green-100">
                {grade.status}
              </div>
            </td>
            <td className="px-6 py-3">
              <button className="cursor-pointer">
                <Eye className="w-4 h-4 text-primary-a20" />
              </button>
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default StudentGrades;
