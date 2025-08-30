# Student Management System Frontend

## Features

- **Admin Dashboard:** View statistics, manage students, teachers, courses, programs and departments
- **Student Dashboard:** Access grades, register for courses
- **Charts & Analytics:** Visualize gender distribution and course statistics
- **Responsive Design:** Works on desktop and mobile devices
- **Dark Mode:** Toggle between light and dark themes
- **Reusable Components:** Built with modular React components
- **Routing:** Client-side navigation using React Router

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── App.jsx/
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sms_project.git
cd sms_project/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful & consistent icon pack
- **Recharts** - Composable charting library for React
- **Shadcn** - For some reussable components
- **React Router** - Declarative routing for React

## License

This project is licensed under the MIT License.

## Note

This frontend is a template. Backend integration and authentication are not included by default.