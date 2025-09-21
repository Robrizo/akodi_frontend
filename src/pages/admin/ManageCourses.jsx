import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import GeneralTable from "../../components/common/GeneralTable";
import { Edit, Trash2 } from "lucide-react";

const ManageCourses = () => {
  const courses = [
    {
      courseId: "CSE101",
      name: "Introduction to Computer Science",
      department: "ICT",
      credits: 3,
      dateCreated: "2023-01-10",
    },
    {
      courseId: "MTH201",
      name: "Calculus II",
      department: "Mathematics",
      credits: 4,
      dateCreated: "2022-09-05",
    },
    {
      courseId: "ENG101",
      name: "English Composition",
      department: "English",
      credits: 2,
      dateCreated: "2021-08-20",
    },
    {
      courseId: "SCI301",
      name: "Physics III",
      department: "Science",
      credits: 4,
      dateCreated: "2022-03-15",
    },
    {
      courseId: "HIS101",
      name: "World History",
      department: "History",
      credits: 3,
      dateCreated: "2023-06-01",
    },
  ];

  return (
    <div>
      <SectionHeader
        title={"Course Management"}
        desc={"Manage course records and information"}
      />
      <div className="mt-6">
        <GeneralTable
          tableTitle={"Course List"}
          buttonTitle={"Add Course"}
          showAddButton={true}
          showExportButton={true}
          headers={[
            "Course ID",
            "Name",
            "Department",
            "Credits",
            "Date Created",
            "Actions",
          ]}
          rows={courses}
          renderRows={(course) => (
            <tr
              key={course.courseId}
              className="hover:bg-surface-a10 dark:hover:bg-surface-dark-a10 dark:text-light-a0/80"
            >
              <td className="px-6 py-3">{course.courseId}</td>
              <td className="px-6 py-3">{course.name}</td>
              <td className="px-6 py-3">{course.department}</td>
              <td className="px-6 py-3">{course.credits}</td>
              <td className="px-6 py-3">
                {new Date(course.dateCreated).toLocaleDateString()}
              </td>
              <td className="px-6 py-3">
                <div className="flex items-center gap-4">
                  <button className="cursor-pointer">
                    <Edit className="w-4 h-4 text-primary-a20" />
                  </button>
                  <button className="cursor-pointer">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );
};

export default ManageCourses;
