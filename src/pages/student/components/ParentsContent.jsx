import React, { useState } from "react";
import Button from "@/components/common/Button";

const ParentsContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [parentData, setParentData] = useState({
    name: "John Doe",
    relationship: "Father",
    phone: "+265 888 123 456",
    email: "johndoe@gmail.com",
    address: "Mzuzu, Malawi",
  });

  const [formData, setFormData] = useState(parentData);

  const handleSave = () => {
    setParentData(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-primary-a0 font-medium">
          Parent or Guardian Information
        </h2>
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

      {/* View Mode */}
      {!isEditing && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Name:
              </span>{" "}
              {parentData.name}
            </p>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Relationship:
              </span>{" "}
              {parentData.relationship}
            </p>
          </div>
          <div>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Phone:
              </span>{" "}
              {parentData.phone}
            </p>
            <p className="dark:text-light-a0/60">
              <span className="font-semibold text-dark-a0 dark:text-light-a0">
                Email:
              </span>{" "}
              {parentData.email}
            </p>
          </div>
          <p className="dark:text-light-a0/60">
            <span className="font-semibold text-dark-a0 dark:text-light-a0">
              Address:
            </span>{" "}
            {parentData.address}
          </p>
        </div>
      )}

      {/* Edit Mode */}
      {isEditing && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1 dark:text-light-a0/60">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-surface-a30 outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1 dark:text-light-a0/60">
              Relationship
            </label>
            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="border border-surface-a30 outline-none focus:ring-1 focus:ring-primary-a0 rounded p-2 mt-1 dark:border-surface-dark-a30 dark:text-light-a0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1 dark:text-light-a0/60">
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
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1 dark:text-light-a0/60">
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
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-600 mb-1 dark:text-light-a0/60">
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

export default ParentsContent;
