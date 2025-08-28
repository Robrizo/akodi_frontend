import React from "react";
import { Icon } from "lucide-react";

const Card = ({ title, icon: Icon, total }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md dark:bg-surface-dark-a10">
      <div className="flex items-center justify-between">
        <h2 className="text-dark-a0 font-bold dark:text-light-a0">{title}</h2>
        <Icon className="w-8 h-8 text-primary-a20" />
      </div>
      <div className="text-2xl text-dark-a0 mt-4 font-bold dark:text-light-a0">{total}</div>
    </div>
  );
};

export default Card;
