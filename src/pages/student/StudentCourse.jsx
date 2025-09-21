import GeneralTable from "@/components/common/GeneralTable";
import SectionHeader from "@/components/common/SectionHeader";
import { Eye } from "lucide-react";
import React from "react";

const StudentCourse = () => {
  const studentCourses = [
    { id: 1, code: "CS101", name: "Introduction to Computer Science" },
    { id: 2, code: "MATH201", name: "Calculus I" },
    { id: 3, code: "PHY101", name: "General Physics" },
    { id: 4, code: "ENG101", name: "English Composition" },
    { id: 5, code: "HIST101", name: "World History" },
  ];
  return (
    <div>
      <SectionHeader title="Courses" desc="View your enrolled courses" />

      <div>
        <GeneralTable
          headers={["Course Code", "Course Name", "Action"]}
          showSearch={false}
          rows={studentCourses}
          renderRows={(course) => (
            <tr
              key={course.id}
              className="hover:bg-surface-a10 dark:hover:bg-surface-dark-a10 dark:text-light-a0/80"
            >
              <td className="px-6 py-3 font-medium">{course.code} </td>
              <td className="px-6 py-3">{course.name}</td>
              <td className="px-6 py-3">
                <button className="cursor-pointer">
                  <Eye className="w-4 h-4 text-primary-a20" />
                </button>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );
};

export default StudentCourse;
