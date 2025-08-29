import { Calendar, CircleCheckBig } from "lucide-react";
import React from "react";

const StudentDashboard = () => {
  return (
    <div>
      <div className="bg-surface-a0 w-full p-4 rounded-lg shadow-md dark:bg-surface-dark-a10">
        <div>
          <div className="flex flex-col md:items-center md:justify-between md:flex-row gap-2">
            <h1 className="text-2xl text-dark-a0 font-bold dark:text-light-a0">
              Robert Chunga
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-primary-a30 w-fit px-2 py-1 rounded">
                <span>
                  <Calendar className="w-4 h-4 text-surface-a0" />
                </span>
                <span className="text-surface-a0 text-sm font-semibold">
                  Year 2
                </span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 w-fit px-2 py-1 rounded">
                <span>
                  <CircleCheckBig className="w-4 h-4 text-green-600" />
                </span>
                <span className="text-green-600 text-sm font-semibold">
                  Active
                </span>
              </div>
            </div>
          </div>
          <h3 className="text-dark-a0/50 text-sm max-w-sm md:max-w-full dark:text-light-a0/50">
            Bachelor of Science in Information and Communication Technology
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
