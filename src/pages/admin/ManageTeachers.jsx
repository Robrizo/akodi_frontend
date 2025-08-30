import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import GeneralTable from "../../components/common/GeneralTable";
import { Edit, Trash2 } from "lucide-react";

const ManageTeachers = () => {
  const teachers = [
    {
      teacherId: "TCH001",
      name: "Mr. James Mwale",
      email: "james.mwale@example.com",
      department: "Mathematics",
      status: "Active",
      dateHired: "2019-03-15",
    },
    {
      teacherId: "TCH002",
      name: "Mrs. Linda Chirwa",
      email: "linda.chirwa@example.com",
      department: "English",
      status: "Active",
      dateHired: "2020-08-10",
    },
    {
      teacherId: "TCH003",
      name: "Dr. Patrick Zimba",
      email: "patrick.zimba@example.com",
      department: "Science",
      status: "Inactive",
      dateHired: "2018-01-25",
    },
    {
      teacherId: "TCH004",
      name: "Miss Grace Banda",
      email: "grace.banda@example.com",
      department: "History",
      status: "Active",
      dateHired: "2021-05-30",
    },
    {
      teacherId: "TCH005",
      name: "Mr. Steven Phiri",
      email: "steven.phiri@example.com",
      department: "ICT",
      status: "Active",
      dateHired: "2022-09-12",
    },
  ];

  return (
    <div>
      <SectionHeader
        title={"Teacher Management"}
        desc={"Manage teacher records and information"}
      />
      <div className="mt-6 mx-auto">
        <GeneralTable
          tableTitle={"Teacher List"}
          buttonTitle={"Add Teacher"}
          headers={[
            "Teacher ID",
            "Name",
            "Email",
            "Department",
            "Status",
            "Date Hired",
            "Actions",
          ]}
          rows={teachers}
          renderRows={(teacher) => (
            <tr className="hover:bg-surface-a10 dark:hover:bg-surface-dark-a10 dark:text-light-a0/80">
              <td className="px-6 py-3 font-semibold">{teacher.teacherId}</td>
              <td className="px-6 py-3">{teacher.name}</td>
              <td className="px-6 py-3">{teacher.email}</td>
              <td className="px-6 py-3">{teacher.department}</td>
              <td className="px-6 py-3">
                <div
                  className={`w-fit px-4 rounded-full font-medium text-xs py-0.5 ${
                    teacher.status === "Active"
                      ? "text-green-600 bg-green-100"
                      : teacher.status === "Inactive"
                      ? "text-yellow-600 bg-yellow-100"
                      : "text-red-600 bg-red-100"
                  }`}
                >
                  {teacher.status === "active"}
                  {teacher.status === "inactive"}
                  {teacher.status.charAt(0).toUpperCase() +
                    teacher.status.slice(1)}
                </div>
              </td>
              <td className="px-6 py-3">{teacher.dateHired}</td>
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

export default ManageTeachers;
