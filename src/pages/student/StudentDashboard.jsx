import {
  BookOpen,
  Calendar,
  CircleCheckBig,
  Pencil,
  RefreshCcw,
  Scale,
} from "lucide-react";
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router";

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
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

      {/* stats and quick actions */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* quick actions */}
        <div className="bg-surface-a0 space-y-4 shadow-md rounded-lg p-6 dark:bg-surface-dark-a10">
          <div>
            <h1 className="text-lg text-dark-a0 font-bold dark:text-light-a0">
              Quick Actions
            </h1>
          </div>
          <div className="space-y-4">
            <Card
              onClick={() => navigate("/student/profile")}
              className="bg-surface-a10/50 shadow-none hover:text-primary-a0 hover:bg-primary-a0/10 hover:font-medium border-none py-3 hover:border-primary-a0 transition-colors cursor-pointer dark:bg-surface-dark-a20"
            >
              <CardHeader className="flex items-center gap-2">
                <span className="p-2 bg-primary-a0 text-light-a0 rounded-md">
                  <RefreshCcw className="w-4 h-4" />
                </span>
                Update Profile
              </CardHeader>
            </Card>
            <Card
              onClick={() => navigate("/student/register")}
              className="bg-surface-a10/50 shadow-none hover:text-primary-a0 hover:bg-primary-a0/10 hover:font-medium border-none py-3 hover:border-primary-a0 transition-colors cursor-pointer dark:bg-surface-dark-a20"
            >
              <CardHeader className="flex items-center gap-2">
                <span className="p-2 bg-primary-a0 text-light-a0 rounded-md">
                  <Pencil className="w-4 h-4" />
                </span>
                Register Courses
              </CardHeader>
            </Card>
            <Card
              onClick={() => navigate("/student/courses")}
              className="bg-surface-a10/50 shadow-none hover:text-primary-a0 hover:bg-primary-a0/10 hover:font-medium border-none py-3 hover:border-primary-a0 transition-colors cursor-pointer dark:bg-surface-dark-a20"
            >
              <CardHeader className="flex items-center gap-2">
                <span className="p-2 bg-primary-a0 text-light-a0 rounded-md">
                  <BookOpen className="w-4 h-4" />
                </span>
                View Courses
              </CardHeader>
            </Card>
            <Card
              onClick={() => navigate("/student/grades")}
              className="bg-surface-a10/50 shadow-none hover:text-primary-a0 hover:bg-primary-a0/10 hover:font-medium border-none py-3 hover:border-primary-a0 transition-colors cursor-pointer dark:bg-surface-dark-a20"
            >
              <CardHeader className="flex items-center gap-2">
                <span className="p-2 bg-primary-a0 text-light-a0 rounded-md">
                  <Scale className="w-4 h-4" />
                </span>
                Check Grades
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* stats */}
        <div className="bg-surface-a0 shadow-md rounded-lg p-6 dark:bg-surface-dark-a10">
          <div className="space-y-4">
            <Card className="bg-surface-a10/50 shadow-none font-medium border-none py-3 dark:bg-surface-dark-a20">
              <CardHeader className="flex items-center justify-between gap-2">
                Semester
                <span className="text-dark-a0 font-bold text-2xl dark:text-light-a0">
                  2
                </span>
              </CardHeader>
            </Card>
            <Card className="bg-surface-a10/50 shadow-none font-medium border-none py-3 dark:bg-surface-dark-a20">
              <CardHeader className="flex items-center justify-between gap-2">
                Courses
                <span className="text-dark-a0 font-bold text-2xl dark:text-light-a0">
                  5
                </span>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
