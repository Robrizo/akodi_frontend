import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import ManageStudents from "./pages/admin/ManageStudents";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageTeachers from "./pages/admin/ManageTeachers";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageUsers from "./pages/admin/ManageUsers";
import Settings from "./pages/admin/Settings";
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentCourse from "./pages/student/StudentCourse";
import StudentGrades from "./pages/student/StudentGrades";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<ManageStudents />} />
          <Route path="teachers" element={<ManageTeachers />} />
          <Route path="courses" element={<ManageCourses />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* student routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="courses" element={<StudentCourse />} />
          <Route path="grades" element={<StudentGrades />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
