import Dashboard from "@/components/shared/layouts/Dashboard";
import React from "react";

const ControlPanel = () => {
  return (
    <Dashboard>
      <div className="w-full h-screen flex justify-center items-center rounded-lg overflow-hidden">
        <iframe
          title="Portfolio"
          src="https://bento.me/devhasibulislam"
          className="w-full h-full rounded-lg"
          frameBorder="0"
          scrolling="auto"
        ></iframe>
      </div>
    </Dashboard>
  );
};

export default ControlPanel;
