import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import ManageStudents from "./pages/admin/ManageStudents";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageLecturers from "./pages/admin/ManageLecturers";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageUsers from "./pages/admin/ManageUsers";
import Settings from "./pages/admin/Settings";
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentCourse from "./pages/student/StudentCourse";
import StudentGrades from "./pages/student/StudentGrades";
import StudentCourseRegister from "./pages/student/StudentCourseRegister";
import LecturerLayout from "./pages/Lecturer/LecturerLayout";
import LecturerDashboard from "./pages/Lecturer/LecturerDashboard";
import StudentSecurity from "./pages/student/StudentSecurity";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<ManageStudents />} />
          <Route path="lecturers" element={<ManageLecturers />} />
          <Route path="courses" element={<ManageCourses />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* student routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="register" element={<StudentCourseRegister />} />
          <Route path="courses" element={<StudentCourse />} />
          <Route path="grades" element={<StudentGrades />} />
          <Route path="security" element={<StudentSecurity />} />
        </Route>

        {/* lecturer routes */}
        <Route path="/lecturer" element={<LecturerLayout />}>
          <Route index element={<LecturerDashboard />} />
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
