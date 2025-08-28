import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-7xl text-gray-900 font-bold mb-2 lg:text-9xl">
          404
        </h1>
        <h2 className="text-2xl text-gray-700 mb-2">page not found</h2>
        <p className="text-xl text-gray-600">
          The page you're looking for doesn't exist.
        </p>
      </div>
      <div>
        <Link
          to={"/"}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg opacity-90 hover:opacity-100"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
