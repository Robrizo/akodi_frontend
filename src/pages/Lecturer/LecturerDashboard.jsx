import { Calendar, CircleCheckBig } from "lucide-react";
import React from "react";

const LecturerDashboard = () => {
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
                {/* <p className="text-gray-500 text-sm dark:text-light-a0/50">
                  Employment ID: EMP1001
                </p> */}
              </div>
            </div>
            <p className="text-gray-600 max-w-md dark:text-light-a0/70">
              Master of Science in Information and Communication Technology
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-primary-a0 text-white px-4 py-2 rounded-full shadow-md">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Year 2</span>
            </div>
            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-md">
              <CircleCheckBig className="w-4 h-4" />
              <span className="text-sm font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboard;
