import React, { useState } from "react";
import { Calendar, CircleCheckBig } from "lucide-react";
import PersonalContent from "./components/PersonalContent";
import ParentsContent from "./components/ParentsContent";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("personalInfo");

  const tabs = [
    {
      id: "personalInfo",
      label: "Personal Info",
      content: <PersonalContent />,
    },
    {
      id: "parentsGuardian",
      label: "Parents/Guardian",
      content: <ParentsContent />,
    },
  ];
  return (
    <div>
      {/* Header Card */}
      <div className="bg-surface-a0 w-full px-4 py-6 rounded-lg shadow-xl dark:bg-surface-dark-a10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-primary-a0 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                RC
              </div>
              <div>
                <h1 className="text-3xl text-dark-a0 font-bold dark:text-light-a0">
                  Robert Chunga
                </h1>
                <p className="text-gray-500 text-sm dark:text-light-a0/50">
                  Student ID: STU001
                </p>
              </div>
            </div>
            <p className="text-gray-600 max-w-md dark:text-light-a0/70">
              Bachelor of Science in Information and Communication Technology
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-primary-a0 text-white px-4 py-2 rounded-full shadow-md">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Year 2</span>
            </div>
            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-md">
              <CircleCheckBig className="w-4 h-4" />
              <span className="text-sm font-semibold">Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* menu tab */}
      <div className="bg-surface-a0 w-full px-4 py-4   rounded-lg shadow-xl dark:bg-surface-dark-a10 mt-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <nav className="space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-md font-medium cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary-a0/10 border-b-2 text-primary-a10"
                    : "text-dark-a0 bg-surface-a10 hover:bg-primary-a0/10 hover:text-primary-a0 dark:text-light-a0 dark:bg-surface-dark-a20"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        {/* tab content */}
        <div className="mt-4 bg-surface-a10/80 w-full px-4 py-4 rounded-lg dark:bg-surface-dark-a20">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="">
                  {tab.content}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
