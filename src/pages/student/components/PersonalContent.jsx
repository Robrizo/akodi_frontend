import Button from "@/components/common/Button";
import React, { useState } from "react";

const PersonalContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Robert Chunga",
    dob: "1999-05-15",
    email: "roberchunga@gmail.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-primary-a0 font-medium">Personal Information</h2>
        <div>
          {!isEditing ? (
            <Button title="Edit" handleSubmit={() => setIsEditing(true)} />
          ) : (
            <div className="flex gap-2">
              <Button title="Cancel" handleSubmit={() => setIsEditing(false)} />
              <Button title="Save" onClick={handleSave} />
            </div>
          )}
        </div>
      </div>
      {/* view mode */}
      {!isEditing && (
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Full Name:
              </span>{" "}
              {formData.fullName}
            </p>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Date of Birth:
              </span>{" "}
              {formData.dob}
            </p>
          </div>
          <div>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Email:
              </span>{" "}
              {formData.email}
            </p>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Phone:
              </span>{" "}
              {formData.phone}
            </p>
          </div>
          <div>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Address:
              </span>{" "}
              {formData.address}
            </p>
          </div>
        </div>
      )}

      {/* edit mode */}
      {isEditing && (
        <form className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 dark:text-light-a0/60">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              disabled="true"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-surface-a30 outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 dark:text-light-a0/60">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border border-surface-a30 outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 dark:text-light-a0/60">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-surface-a30 outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 dark:text-light-a0/60">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-surface-a30 outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-600 dark:text-light-a0/60">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-surface-a30 resize-none outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalContent;
