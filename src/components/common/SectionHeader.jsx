import React from "react";

const SectionHeader = ({ title, desc }) => {
  return (
    <div>
      <div>
        <h1 className="text-xl text-dark-a0 font-bold xl:text-2xl dark:text-light-a0">
          {title}
        </h1>
        <p className="text-dark-a0/50 dark:text-light-a0/50">{desc}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
