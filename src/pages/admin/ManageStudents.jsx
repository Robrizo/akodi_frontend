import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import GeneralTable from "../../components/common/GeneralTable";
import { Edit, Trash2 } from "lucide-react";

const ManageStudents = () => {
  const students = [
    {
      studentId: "STU001",
      name: "John Banda",
      email: "john.banda@example.com",
      year: "1st Year",
      status: "Active",
      dateEnrolled: "2023-09-15",
    },
    {
      studentId: "STU002",
      name: "Mary Phiri",
      email: "mary.phiri@example.com",
      year: "2nd Year",
      status: "Inactive",
      dateEnrolled: "2022-08-20",
    },
    {
      studentId: "STU003",
      name: "Robert Chunga",
      email: "robert.chunga@example.com",
      year: "3rd Year",
      status: "Active",
      dateEnrolled: "2021-07-10",
    },
    {
      studentId: "STU004",
      name: "Grace Mvula",
      email: "grace.mvula@example.com",
      year: "4th Year",
      status: "Pending Graduation",
      dateEnrolled: "2020-09-01",
    },
    {
      studentId: "STU005",
      name: "Peter Nkhoma",
      email: "peter.nkhoma@example.com",
      year: "2nd Year",
      status: "Graduated",
      dateEnrolled: "2022-01-12",
    },
  ];

  return (
    <div>
      <SectionHeader
        title={"Student Management"}
        desc={"Manage student records and information"}
      />

      <div className="mt-8 mx-auto">
        <GeneralTable
          tableTitle={"Student List"}
          buttonTitle={"Add Student"}
          headers={[
            "Student ID",
            "Name",
            "Email",
            "Year",
            "Status",
            "Date Enrolled",
            "Actions",
          ]}
          rows={students}
          renderRows={(student) => (
            <tr className="hover:bg-surface-a10 dark:hover:bg-surface-dark-a10 dark:text-light-a0/80">
              <td className="px-6 py-3 font-semibold">{student.studentId}</td>
              <td className="px-6 py-3">{student.name}</td>
              <td className="px-6 py-3">{student.email}</td>
              <td className="px-6 py-3">{student.year}</td>
              <td className="px-6 py-3 text-center">
                <div
                  className={`w-fit px-4 rounded-full font-medium text-xs py-0.5 ${
                    student.status === "Active"
                      ? "text-green-600 bg-green-100"
                      : student.status === "Inactive"
                      ? "text-yellow-600 bg-yellow-100"
                      : student.status === "Graduated"
                      ? "text-blue-600 bg-blue-100"
                      : student.status === "Pending Graduation"
                      ? "text-gray-600 bg-gray-100"
                      : "text-red-600 bg-red-100"
                  }`}
                >
                  {student.status === "active"}
                  {student.status === "inactive"}
                  {student.status === "graduated"}
                  {student.status === "pending graduation"}
                  {student.status.charAt(0).toUpperCase() +
                    student.status.slice(1)}
                </div>
              </td>
              <td className="px-6 py-3">{student.dateEnrolled}</td>
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

export default ManageStudents;
