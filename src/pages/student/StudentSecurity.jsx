import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";
import React, { useState } from "react";

const StudentSecurity = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <SectionHeader title="Security Settings" desc="Update your password" />

      {/* Password Update */}
      <form
        onSubmit={handlePasswordSubmit}
        className="mt-8 space-y-4 bg-surface-a0 p-6 rounded-md shadow dark:bg-surface-dark-a10"
      >
        <h2 className="text-lg font-semibold dark:text-light-a0">
          Change Password
        </h2>
        <div>
          <label className="block text-sm font-medium text-dark-a0 dark:text-light-a0">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handlePasswordChange}
            className="mt-1 block w-full md:max-w-md px-2 py-2 border border-surface-a50 rounded-md focus:outline-none focus:ring-primary-a0 focus:ring-1 dark:bg-surface-dark-a20 dark:text-light-a0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-a0 dark:text-light-a0">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            className="mt-1 block w-full md:max-w-md px-2 py-2 border border-surface-a50 rounded-md focus:outline-none focus:ring-primary-a0 focus:ring-1 dark:bg-surface-dark-a20 dark:text-light-a0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-a0 dark:text-light-a0">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handlePasswordChange}
            className="mt-1 block w-full md:max-w-md px-2 py-2 border border-surface-a50 rounded-md focus:outline-none focus:ring-primary-a0 focus:ring-1 dark:bg-surface-dark-a20 dark:text-light-a0"
          />
        </div>
        <div className="mt-4 w-fit">
          <Button title={"Update Password"} />
        </div>
      </form>
    </div>
  );
};

export default StudentSecurity;
