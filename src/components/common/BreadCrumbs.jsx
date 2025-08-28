import { useLocation, Link } from "react-router"; // use "react-router-dom" not "react-router"

const labelMap = {
  admin: {
    dashboard: "Dashboard",
    student: "Students",
    teacher: "Teachers",
    subject: "Subjects",
    class: "Classes",
    user: "Users",
    settings: "Settings",
  },
  teacher: {
    dashboard: "Dashboard",
    classes: "My Classes",
    assignments: "Assignments",
    profile: "Profile",
  },
  student: {
    dashboard: "Dashboard",
    courses: "Courses",
    grades: "Grades",
    profile: "Profile",
  },
};

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const role = segments[0]
  const labels = labelMap[role];

  if (!labels) return null; // If role not recognized, don't render breadcrumbs

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <Link to={`/${role}`} className="text-blue-600 hover:underline">
        {labels.dashboard || "Dashboard"}
      </Link>
      {segments.slice(1).map((segment, index) => {
        const path = `/${role}/${segments.slice(1, index + 2).join("/")}`;
        const isLast = index === segments.length - 2;
        const label = labels[segment] || segment;

        return (
          <span key={segment}>
            {" / "}
            {isLast ? (
              <span className="text-gray-800 font-medium">{label}</span>
            ) : (
              <Link to={path} className="text-blue-600 hover:underline">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
