import React, { useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import Button from "../../components/common/Button";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // TODO: API call to update profile
    console.log("Profile updated:", profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // TODO: API call to update password
    console.log("Password updated:", passwords);
  };

  return (
    <div>
      <SectionHeader
        title="Settings"
        desc="Manage application settings and preferences"
      />

      {/* Profile Edit */}
      <form
        onSubmit={handleProfileSubmit}
        className="mt-8 space-y-4 bg-surface-a0 p-6 rounded-md shadow dark:bg-surface-dark-a10"
      >
        <h2 className="text-lg font-semibold dark:text-light-a0">
          Edit Profile
        </h2>
        <div>
          <label className="block text-sm font-medium text-dark-a0 dark:text-light-a0">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            className="mt-1 block w-full md:max-w-md px-2 py-2 border border-surface-a50 rounded-md focus:outline-none focus:ring-primary-a0 focus:ring-1 dark:bg-surface-dark-a20 dark:text-light-a0"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-a0 dark:text-light-a0">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            className="mt-1 block w-full md:max-w-md px-2 py-2 border border-surface-a50 rounded-md focus:outline-none focus:ring-primary-a0 focus:ring-1 dark:bg-surface-dark-a20 dark:text-light-a0"
            placeholder="you@example.com"
          />
        </div>
        <div className="mt-4 w-fit">
          <Button title={"Update Profile"} />
        </div>
      </form>

      {/* Password Update */}
      <form
        onSubmit={handlePasswordSubmit}
        className="mt-10 space-y-4 bg-surface-a0 p-6 rounded-md shadow dark:bg-surface-dark-a10"
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

export default Settings;
