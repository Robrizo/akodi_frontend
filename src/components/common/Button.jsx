import React from "react";

const Button = ({ title, handleSubmit, icon: Icon = null }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full flex items-center justify-center py-2 px-3 rounded-md text-light-a0 bg-primary-a20 opacity-90 hover:opacity-100 cursor-pointer"
      >
        {Icon && <Icon className="inline-block mr-1 h-5 w-5" />}
        {title}
      </button>
    </div>
  );  
};

export default Button;
