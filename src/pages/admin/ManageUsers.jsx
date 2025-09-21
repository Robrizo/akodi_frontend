import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import GeneralTable from "../../components/common/GeneralTable";
import { Edit, Trash2 } from "lucide-react";

const ManageUsers = () => {
  const users = [
    {
      userId: "USR001",
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
      dateCreated: "2022-01-15",
    },
    {
      userId: "USR002",
      name: "John Banda",
      email: "john.banda@example.com",
      role: "Student",
      status: "Active",
      dateCreated: "2023-09-12",
    },
    {
      userId: "USR003",
      name: "Mary Phiri",
      email: "mary.phiri@example.com",
      role: "Teacher",
      status: "Inactive",
      dateCreated: "2022-07-21",
    },
    {
      userId: "USR004",
      name: "Grace Mvula",
      email: "grace.mvula@example.com",
      role: "Student",
      status: "Active",
      dateCreated: "2024-02-05",
    },
    {
      userId: "USR005",
      name: "Steven Phiri",
      email: "steven.phiri@example.com",
      role: "Teacher",
      status: "Suspended",
      dateCreated: "2021-12-01",
    },
  ];

  return (
    <div>
      <SectionHeader
        title={"User Management"}
        desc={"Manage user accounts and permissions"}
      />

      <div className="mt-6">
        <GeneralTable
          tableTitle={"User List"}
          showAddButton={true}
          showExportButton={true}
          headers={["User ID", "Name", "Email", "Role", "Status", "Actions"]}
          rows={users}
          buttonTitle={"Add User"}
          renderRows={(user) => (
            <tr
              key={user.userId}
              className="hover:bg-surface-a10 dark:hover:bg-surface-dark-a10 dark:text-light-a0/80"
            >
              <td className="px-6 py-3 font-medium">{user.userId}</td>
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">{user.role}</td>
              <td className="px-6 py-3">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : user.status === "Inactive"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.status}
                </span>
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

export default ManageUsers;
